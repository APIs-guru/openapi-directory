from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetStorageCommitmentIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStorageCommitmentIDRequest:
    path_params: GetStorageCommitmentIDPathParams = field()
    

@dataclass
class GetStorageCommitmentIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_storage_commitment_id_200_application_json_any: Optional[Any] = field(default=None)
    
