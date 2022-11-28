from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBlobMetadataByIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBlobMetadataByIDRequest:
    path_params: GetBlobMetadataByIDPathParams = field()
    

@dataclass
class GetBlobMetadataByIDResponse:
    content_type: str = field()
    status_code: int = field()
    blob: Optional[shared.Blob] = field(default=None)
    
