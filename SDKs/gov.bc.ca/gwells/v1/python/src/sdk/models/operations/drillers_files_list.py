from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class DrillersFilesListPathParams:
    person_guid: str = field(default=None, metadata={'path_param': { 'field_name': 'person_guid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DrillersFilesListRequest:
    path_params: DrillersFilesListPathParams = field(default=None)
    

@dataclass_json
@dataclass
class DrillersFilesList200ApplicationJSONPrivate:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class DrillersFilesList200ApplicationJSONPublic:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class DrillersFilesList200ApplicationJSON:
    private: Optional[List[DrillersFilesList200ApplicationJSONPrivate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private' }})
    public: Optional[List[DrillersFilesList200ApplicationJSONPublic]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    

@dataclass
class DrillersFilesListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    drillers_files_list_200_application_json_object: Optional[DrillersFilesList200ApplicationJSON] = field(default=None)
    
