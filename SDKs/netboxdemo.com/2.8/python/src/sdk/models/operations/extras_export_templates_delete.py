from dataclasses import dataclass, field



@dataclass
class ExtrasExportTemplatesDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasExportTemplatesDeleteRequest:
    path_params: ExtrasExportTemplatesDeletePathParams = field()
    

@dataclass
class ExtrasExportTemplatesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
