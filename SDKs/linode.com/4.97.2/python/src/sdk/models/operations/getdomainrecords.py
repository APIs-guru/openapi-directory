from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDomainRecordsPathParams:
    domain_id: int = field(default=None, metadata={'path_param': { 'field_name': 'domainId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDomainRecordsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDomainRecordsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetDomainRecordsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetDomainRecordsSecurity:
    option1: Optional[GetDomainRecordsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetDomainRecordsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetDomainRecordsRequest:
    path_params: GetDomainRecordsPathParams = field(default=None)
    query_params: GetDomainRecordsQueryParams = field(default=None)
    security: GetDomainRecordsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetDomainRecords200ApplicationJSON:
    data: Optional[List[shared.DomainRecord]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class GetDomainRecordsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_domain_records_200_application_json_object: Optional[GetDomainRecords200ApplicationJSON] = field(default=None)
    
