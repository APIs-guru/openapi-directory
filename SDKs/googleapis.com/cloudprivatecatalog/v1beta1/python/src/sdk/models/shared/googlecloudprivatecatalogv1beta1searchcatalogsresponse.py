from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse:
    r"""GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse
    Response message for PrivateCatalog.SearchCatalogs.
    """
    
    catalogs: Optional[List[GoogleCloudPrivatecatalogV1beta1Catalog]] = field(default=None)
    next_page_token: Optional[str] = field(default=None)
    
