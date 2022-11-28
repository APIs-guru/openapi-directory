from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class MarkPlayedItemPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class MarkPlayedItemQueryParams:
    date_played: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'datePlayed', 'style': 'form', 'explode': True }})
    

@dataclass
class MarkPlayedItemSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class MarkPlayedItemRequest:
    path_params: MarkPlayedItemPathParams = field()
    query_params: MarkPlayedItemQueryParams = field()
    security: MarkPlayedItemSecurity = field()
    

@dataclass
class MarkPlayedItemResponse:
    content_type: str = field()
    status_code: int = field()
    user_item_data_dto: Optional[shared.UserItemDataDto] = field(default=None)
    
