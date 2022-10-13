from dataclasses import dataclass, field



@dataclass
class DcimDeviceBayTemplatesDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDeviceBayTemplatesDeleteRequest:
    path_params: DcimDeviceBayTemplatesDeletePathParams = field(default=None)
    

@dataclass
class DcimDeviceBayTemplatesDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
