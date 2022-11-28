from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchUsersUserEmailTransferPathParams:
    user_email: str = field(metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchUsersUserEmailTransferRequest:
    path_params: PatchUsersUserEmailTransferPathParams = field()
    request: shared.TransferRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchUsersUserEmailTransferResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    
