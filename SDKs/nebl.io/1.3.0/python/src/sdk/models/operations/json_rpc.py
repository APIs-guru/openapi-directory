from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
JSON_RPC_SERVERS = [
	"http://127.0.0.1:6326",
	"http://127.0.0.1:16326",
]


@dataclass
class JSONRPCSecurity:
    rpc_auth: shared.SchemeRPCAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class JSONRPCRequest:
    server_url: Optional[str] = field(default=None)
    request: shared.RPCRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: JSONRPCSecurity = field(default=None)
    

@dataclass
class JSONRPCResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    rpc_response: Optional[shared.RPCResponse] = field(default=None)
    
