from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class CommitteeListCommitteesGetQueryParams:
    apikey: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'apikey', 'style': 'form', 'explode': True }})
    chamber: Optional[shared.OrgClassificationEnum] = field(default=None, metadata={'query_param': { 'field_name': 'chamber', 'style': 'form', 'explode': True }})
    classification: Optional[shared.CommitteeClassificationEnum] = field(default=None, metadata={'query_param': { 'field_name': 'classification', 'style': 'form', 'explode': True }})
    include: Optional[List[shared.CommitteeIncludeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    jurisdiction: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'jurisdiction', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    parent: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'parent', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class CommitteeListCommitteesGetHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-api-key' }})
    

@dataclass
class CommitteeListCommitteesGetRequest:
    query_params: CommitteeListCommitteesGetQueryParams = field(default=None)
    headers: CommitteeListCommitteesGetHeaders = field(default=None)
    

@dataclass
class CommitteeListCommitteesGetResponse:
    committee_list: Optional[shared.CommitteeList] = field(default=None)
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    status_code: int = field(default=None)
    
