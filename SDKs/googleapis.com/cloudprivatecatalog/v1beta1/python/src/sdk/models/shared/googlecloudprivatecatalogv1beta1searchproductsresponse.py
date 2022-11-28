from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GoogleCloudPrivatecatalogV1beta1SearchProductsResponse:
    r"""GoogleCloudPrivatecatalogV1beta1SearchProductsResponse
    Response message for PrivateCatalog.SearchProducts.
    """
    
    next_page_token: Optional[str] = field(default=None)
    products: Optional[List[GoogleCloudPrivatecatalogV1beta1Product]] = field(default=None)
    
