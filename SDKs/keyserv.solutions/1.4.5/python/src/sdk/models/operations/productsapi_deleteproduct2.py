from dataclasses import dataclass, field



@dataclass
class ProductsAPIDeleteProduct2PathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductsAPIDeleteProduct2Headers:
    x_api_key: str = field(metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductsAPIDeleteProduct2Request:
    headers: ProductsAPIDeleteProduct2Headers = field()
    path_params: ProductsAPIDeleteProduct2PathParams = field()
    

@dataclass
class ProductsAPIDeleteProduct2Response:
    content_type: str = field()
    status_code: int = field()
    
