from dataclasses import dataclass, field



@dataclass
class DcimManufacturersDeletePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimManufacturersDeleteRequest:
    path_params: DcimManufacturersDeletePathParams = field()
    

@dataclass
class DcimManufacturersDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
