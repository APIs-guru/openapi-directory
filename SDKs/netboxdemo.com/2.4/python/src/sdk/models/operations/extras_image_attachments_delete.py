from dataclasses import dataclass, field



@dataclass
class ExtrasImageAttachmentsDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasImageAttachmentsDeleteRequest:
    path_params: ExtrasImageAttachmentsDeletePathParams = field(default=None)
    

@dataclass
class ExtrasImageAttachmentsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
