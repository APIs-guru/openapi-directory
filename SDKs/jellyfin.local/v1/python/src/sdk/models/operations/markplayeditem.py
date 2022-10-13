from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class MarkPlayedItemPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class MarkPlayedItemQueryParams:
    date_played: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'datePlayed', 'style': 'form', 'explode': True }})
    

@dataclass
class MarkPlayedItemSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class MarkPlayedItemRequest:
    path_params: MarkPlayedItemPathParams = field(default=None)
    query_params: MarkPlayedItemQueryParams = field(default=None)
    security: MarkPlayedItemSecurity = field(default=None)
    

@dataclass
class MarkPlayedItemResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_item_data_dto: Optional[shared.UserItemDataDto] = field(default=None)
    
