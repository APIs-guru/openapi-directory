from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostPatientsIDAnonymizePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPatientsIDAnonymizeRequest:
    path_params: PostPatientsIDAnonymizePathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPatientsIDAnonymizeResponse:
    content_type: str = field(default=None)
    post_patients_id_anonymize_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
