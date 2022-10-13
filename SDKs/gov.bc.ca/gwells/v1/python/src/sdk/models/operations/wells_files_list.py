from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class WellsFilesListPathParams:
    tag: str = field(default=None, metadata={'path_param': { 'field_name': 'tag', 'style': 'simple', 'explode': False }})
    

@dataclass
class WellsFilesListRequest:
    path_params: WellsFilesListPathParams = field(default=None)
    

@dataclass_json
@dataclass
class WellsFilesList200ApplicationJSONPrivate:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class WellsFilesList200ApplicationJSONPublic:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class WellsFilesList200ApplicationJSON:
    private: Optional[List[WellsFilesList200ApplicationJSONPrivate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private' }})
    public: Optional[List[WellsFilesList200ApplicationJSONPublic]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    

@dataclass
class WellsFilesListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    wells_files_list_200_application_json_object: Optional[WellsFilesList200ApplicationJSON] = field(default=None)
    
