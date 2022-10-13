from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchUsersUserEmailTransferPathParams:
    user_email: str = field(default=None, metadata={'path_param': { 'field_name': 'userEmail', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchUsersUserEmailTransferRequest:
    path_params: PatchUsersUserEmailTransferPathParams = field(default=None)
    request: shared.TransferRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchUsersUserEmailTransferResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
