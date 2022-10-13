from dataclasses import dataclass, field



@dataclass
class ExtrasExportTemplatesDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasExportTemplatesDeleteRequest:
    path_params: ExtrasExportTemplatesDeletePathParams = field(default=None)
    

@dataclass
class ExtrasExportTemplatesDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
