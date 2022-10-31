from dataclasses import dataclass, field



@dataclass
class ProductsAPIDeleteProduct2PathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductsAPIDeleteProduct2Headers:
    x_api_key: str = field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductsAPIDeleteProduct2Request:
    path_params: ProductsAPIDeleteProduct2PathParams = field(default=None)
    headers: ProductsAPIDeleteProduct2Headers = field(default=None)
    

@dataclass
class ProductsAPIDeleteProduct2Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
