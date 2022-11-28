from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GoogleCloudPrivatecatalogproducerV1beta1ListProductsResponse:
    next_page_token: Optional[str] = field(default=None)
    products: Optional[List[GoogleCloudPrivatecatalogproducerV1beta1Product]] = field(default=None)
    
