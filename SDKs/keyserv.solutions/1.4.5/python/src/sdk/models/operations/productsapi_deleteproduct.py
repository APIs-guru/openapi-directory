from dataclasses import dataclass, field



@dataclass
class ProductsAPIDeleteProductPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductsAPIDeleteProductHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductsAPIDeleteProductRequest:
    headers: ProductsAPIDeleteProductHeaders = field()
    path_params: ProductsAPIDeleteProductPathParams = field()
    

@dataclass
class ProductsAPIDeleteProductResponse:
    content_type: str = field()
    status_code: int = field()
    
