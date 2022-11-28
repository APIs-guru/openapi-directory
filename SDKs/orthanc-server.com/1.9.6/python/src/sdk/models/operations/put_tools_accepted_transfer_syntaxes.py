from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutToolsAcceptedTransferSyntaxesRequests:
    text_plain: bytes = field(metadata={'request': { 'media_type': 'text/plain' }})
    any: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutToolsAcceptedTransferSyntaxesRequest:
    request: Optional[PutToolsAcceptedTransferSyntaxesRequests] = field(default=None)
    

@dataclass
class PutToolsAcceptedTransferSyntaxesResponse:
    content_type: str = field()
    status_code: int = field()
    put_tools_accepted_transfer_syntaxes_200_application_json_any: Optional[Any] = field(default=None)
    
