from dataclasses import dataclass, field



@dataclass
class DcimDeviceBayTemplatesDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDeviceBayTemplatesDeleteRequest:
    path_params: DcimDeviceBayTemplatesDeletePathParams = field()
    

@dataclass
class DcimDeviceBayTemplatesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
