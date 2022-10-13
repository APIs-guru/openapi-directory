from dataclasses import dataclass, field



@dataclass
class DcimManufacturersDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimManufacturersDeleteRequest:
    path_params: DcimManufacturersDeletePathParams = field(default=None)
    

@dataclass
class DcimManufacturersDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
