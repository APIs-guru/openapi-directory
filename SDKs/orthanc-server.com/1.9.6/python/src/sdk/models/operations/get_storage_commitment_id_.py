from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetStorageCommitmentIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStorageCommitmentIDRequest:
    path_params: GetStorageCommitmentIDPathParams = field(default=None)
    

@dataclass
class GetStorageCommitmentIDResponse:
    content_type: str = field(default=None)
    get_storage_commitment_id_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
