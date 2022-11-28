from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


JSON_RPC_SERVERS = [
	"http://127.0.0.1:6326",
	"http://127.0.0.1:16326",
]


@dataclass
class JSONRPCSecurity:
    rpc_auth: shared.SchemeRPCAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class JSONRPCRequest:
    request: shared.RPCRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: JSONRPCSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class JSONRPCResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    rpc_response: Optional[shared.RPCResponse] = field(default=None)
    
