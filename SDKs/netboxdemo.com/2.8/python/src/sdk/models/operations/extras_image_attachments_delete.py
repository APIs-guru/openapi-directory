from dataclasses import dataclass, field



@dataclass
class ExtrasImageAttachmentsDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasImageAttachmentsDeleteRequest:
    path_params: ExtrasImageAttachmentsDeletePathParams = field()
    

@dataclass
class ExtrasImageAttachmentsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
