from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class CommitteeDetailCommitteesCommitteeIDGetPathParams:
    committee_id: str = field(metadata={'path_param': { 'field_name': 'committee_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CommitteeDetailCommitteesCommitteeIDGetQueryParams:
    apikey: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'apikey', 'style': 'form', 'explode': True }})
    include: Optional[List[shared.CommitteeIncludeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclass
class CommitteeDetailCommitteesCommitteeIDGetHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class CommitteeDetailCommitteesCommitteeIDGetRequest:
    headers: CommitteeDetailCommitteesCommitteeIDGetHeaders = field()
    path_params: CommitteeDetailCommitteesCommitteeIDGetPathParams = field()
    query_params: CommitteeDetailCommitteesCommitteeIDGetQueryParams = field()
    

@dataclass
class CommitteeDetailCommitteesCommitteeIDGetResponse:
    content_type: str = field()
    status_code: int = field()
    committee: Optional[shared.Committee] = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    
