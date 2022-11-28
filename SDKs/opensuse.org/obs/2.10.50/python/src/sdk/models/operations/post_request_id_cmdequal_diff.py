from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class PostRequestIDCmdEqualDiffPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class PostRequestIDCmdEqualDiffViewEnum(str, Enum):
    XML = "xml"

class PostRequestIDCmdEqualDiffWithissuesEnum(str, Enum):
    TRUE = "true"
    ONE = "1"


@dataclass
class PostRequestIDCmdEqualDiffQueryParams:
    diff_to_superseded: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'diff_to_superseded', 'style': 'form', 'explode': True }})
    view: Optional[PostRequestIDCmdEqualDiffViewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    withissues: Optional[PostRequestIDCmdEqualDiffWithissuesEnum] = field(default=None, metadata={'query_param': { 'field_name': 'withissues', 'style': 'form', 'explode': True }})
    

@dataclass
class PostRequestIDCmdEqualDiffSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostRequestIDCmdEqualDiffRequest:
    path_params: PostRequestIDCmdEqualDiffPathParams = field()
    query_params: PostRequestIDCmdEqualDiffQueryParams = field()
    security: PostRequestIDCmdEqualDiffSecurity = field()
    

@dataclass
class PostRequestIDCmdEqualDiffResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    post_request_id_cmd_equal_diff_200_text_plain_string: Optional[str] = field(default=None)
    
