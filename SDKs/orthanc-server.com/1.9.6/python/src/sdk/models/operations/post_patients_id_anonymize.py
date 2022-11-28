from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostPatientsIDAnonymizePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPatientsIDAnonymizeRequest:
    path_params: PostPatientsIDAnonymizePathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPatientsIDAnonymizeResponse:
    content_type: str = field()
    status_code: int = field()
    post_patients_id_anonymize_200_application_json_any: Optional[Any] = field(default=None)
    
