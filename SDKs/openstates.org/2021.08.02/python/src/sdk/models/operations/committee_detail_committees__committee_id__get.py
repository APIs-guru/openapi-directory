from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class CommitteeDetailCommitteesCommitteeIDGetPathParams:
    committee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'committee_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CommitteeDetailCommitteesCommitteeIDGetQueryParams:
    apikey: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'apikey', 'style': 'form', 'explode': True }})
    include: Optional[List[shared.CommitteeIncludeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclass
class CommitteeDetailCommitteesCommitteeIDGetHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-api-key' }})
    

@dataclass
class CommitteeDetailCommitteesCommitteeIDGetRequest:
    path_params: CommitteeDetailCommitteesCommitteeIDGetPathParams = field(default=None)
    query_params: CommitteeDetailCommitteesCommitteeIDGetQueryParams = field(default=None)
    headers: CommitteeDetailCommitteesCommitteeIDGetHeaders = field(default=None)
    

@dataclass
class CommitteeDetailCommitteesCommitteeIDGetResponse:
    committee: Optional[shared.Committee] = field(default=None)
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    status_code: int = field(default=None)
    
