from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class WellsFilesListPathParams:
    tag: str = field(metadata={'path_param': { 'field_name': 'tag', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class WellsFilesList200ApplicationJSONPrivate:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class WellsFilesList200ApplicationJSONPublic:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class WellsFilesList200ApplicationJSON:
    private: Optional[List[WellsFilesList200ApplicationJSONPrivate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private') }})
    public: Optional[List[WellsFilesList200ApplicationJSONPublic]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    

@dataclass
class WellsFilesListRequest:
    path_params: WellsFilesListPathParams = field()
    

@dataclass
class WellsFilesListResponse:
    content_type: str = field()
    status_code: int = field()
    wells_files_list_200_application_json_object: Optional[WellsFilesList200ApplicationJSON] = field(default=None)
    
