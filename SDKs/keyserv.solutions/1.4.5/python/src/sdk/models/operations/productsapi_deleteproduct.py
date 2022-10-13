from dataclasses import dataclass, field



@dataclass
class ProductsAPIDeleteProductPathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductsAPIDeleteProductHeaders:
    x_api_key: str = field(default=None, metadata={'header': { 'field_name': 'X-Api-Key' }})
    

@dataclass
class ProductsAPIDeleteProductRequest:
    path_params: ProductsAPIDeleteProductPathParams = field(default=None)
    headers: ProductsAPIDeleteProductHeaders = field(default=None)
    

@dataclass
class ProductsAPIDeleteProductResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
