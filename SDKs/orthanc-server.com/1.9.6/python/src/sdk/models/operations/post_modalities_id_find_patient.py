from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostModalitiesIDFindPatientPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostModalitiesIDFindPatientRequest:
    path_params: PostModalitiesIDFindPatientPathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostModalitiesIDFindPatientResponse:
    content_type: str = field()
    status_code: int = field()
    post_modalities_id_find_patient_200_application_json_any: Optional[Any] = field(default=None)
    
