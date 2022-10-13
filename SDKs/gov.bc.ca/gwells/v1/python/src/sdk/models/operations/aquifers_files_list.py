from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class AquifersFilesListPathParams:
    aquifer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'aquifer_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AquifersFilesListRequest:
    path_params: AquifersFilesListPathParams = field(default=None)
    

@dataclass_json
@dataclass
class AquifersFilesList200ApplicationJSONPrivate:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class AquifersFilesList200ApplicationJSONPublic:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class AquifersFilesList200ApplicationJSON:
    private: Optional[List[AquifersFilesList200ApplicationJSONPrivate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'private' }})
    public: Optional[List[AquifersFilesList200ApplicationJSONPublic]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    

@dataclass
class AquifersFilesListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    aquifers_files_list_200_application_json_object: Optional[AquifersFilesList200ApplicationJSON] = field(default=None)
    
