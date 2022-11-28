from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class IpamRirsListQueryParams:
    id_in: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__in', 'style': 'form', 'explode': True }})
    is_private: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'is_private', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    slug: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'slug', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class IpamRirsList200ApplicationJSON:
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: List[shared.Rir] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclass
class IpamRirsListRequest:
    query_params: IpamRirsListQueryParams = field()
    

@dataclass
class IpamRirsListResponse:
    content_type: str = field()
    status_code: int = field()
    ipam_rirs_list_200_application_json_object: Optional[IpamRirsList200ApplicationJSON] = field(default=None)
    
