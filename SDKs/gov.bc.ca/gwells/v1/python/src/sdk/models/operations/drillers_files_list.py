from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class DrillersFilesListPathParams:
    person_guid: str = field(metadata={'path_param': { 'field_name': 'person_guid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class DrillersFilesList200ApplicationJSONPrivate:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class DrillersFilesList200ApplicationJSONPublic:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class DrillersFilesList200ApplicationJSON:
    private: Optional[List[DrillersFilesList200ApplicationJSONPrivate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private') }})
    public: Optional[List[DrillersFilesList200ApplicationJSONPublic]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    

@dataclass
class DrillersFilesListRequest:
    path_params: DrillersFilesListPathParams = field()
    

@dataclass
class DrillersFilesListResponse:
    content_type: str = field()
    status_code: int = field()
    drillers_files_list_200_application_json_object: Optional[DrillersFilesList200ApplicationJSON] = field(default=None)
    
