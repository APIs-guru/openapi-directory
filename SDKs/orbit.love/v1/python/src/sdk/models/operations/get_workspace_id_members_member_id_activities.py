from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetWorkspaceIDMembersMemberIDActivitiesPathParams:
    member_id: str = field(metadata={'path_param': { 'field_name': 'member_id', 'style': 'simple', 'explode': False }})
    workspace_id: str = field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    
class GetWorkspaceIDMembersMemberIDActivitiesDirectionEnum(str, Enum):
    ASC = "ASC"
    DESC = "DESC"

class GetWorkspaceIDMembersMemberIDActivitiesItemsEnum(str, Enum):
    TEN = "10"
    FIFTY = "50"
    ONE_HUNDRED = "100"

class GetWorkspaceIDMembersMemberIDActivitiesSortEnum(str, Enum):
    OCCURRED_AT = "occurred_at"
    MEMBER = "member"


@dataclass
class GetWorkspaceIDMembersMemberIDActivitiesQueryParams:
    activity_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'activity_type', 'style': 'form', 'explode': True }})
    direction: Optional[GetWorkspaceIDMembersMemberIDActivitiesDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    items: Optional[GetWorkspaceIDMembersMemberIDActivitiesItemsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'items', 'style': 'form', 'explode': True }})
    page: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    sort: Optional[GetWorkspaceIDMembersMemberIDActivitiesSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWorkspaceIDMembersMemberIDActivitiesSecurity:
    bearer: shared.SchemeBearer = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetWorkspaceIDMembersMemberIDActivitiesRequest:
    path_params: GetWorkspaceIDMembersMemberIDActivitiesPathParams = field()
    query_params: GetWorkspaceIDMembersMemberIDActivitiesQueryParams = field()
    security: GetWorkspaceIDMembersMemberIDActivitiesSecurity = field()
    

@dataclass
class GetWorkspaceIDMembersMemberIDActivitiesResponse:
    content_type: str = field()
    status_code: int = field()
    
