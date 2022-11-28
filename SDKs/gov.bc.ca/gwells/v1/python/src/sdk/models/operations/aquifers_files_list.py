from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class AquifersFilesListPathParams:
    aquifer_id: str = field(metadata={'path_param': { 'field_name': 'aquifer_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AquifersFilesList200ApplicationJSONPrivate:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class AquifersFilesList200ApplicationJSONPublic:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class AquifersFilesList200ApplicationJSON:
    private: Optional[List[AquifersFilesList200ApplicationJSONPrivate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private') }})
    public: Optional[List[AquifersFilesList200ApplicationJSONPublic]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    

@dataclass
class AquifersFilesListRequest:
    path_params: AquifersFilesListPathParams = field()
    

@dataclass
class AquifersFilesListResponse:
    content_type: str = field()
    status_code: int = field()
    aquifers_files_list_200_application_json_object: Optional[AquifersFilesList200ApplicationJSON] = field(default=None)
    
