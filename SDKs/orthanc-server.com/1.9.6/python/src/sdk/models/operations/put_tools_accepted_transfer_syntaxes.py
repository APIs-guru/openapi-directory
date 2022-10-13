from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutToolsAcceptedTransferSyntaxesRequests:
    any: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    text_plain: bytes = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclass
class PutToolsAcceptedTransferSyntaxesRequest:
    request: Optional[PutToolsAcceptedTransferSyntaxesRequests] = field(default=None)
    

@dataclass
class PutToolsAcceptedTransferSyntaxesResponse:
    content_type: str = field(default=None)
    put_tools_accepted_transfer_syntaxes_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
