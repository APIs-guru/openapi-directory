from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GoogleCloudPrivatecatalogproducerV1beta1ListCatalogsResponse:
    catalogs: Optional[List[GoogleCloudPrivatecatalogproducerV1beta1Catalog]] = field(default=None)
    next_page_token: Optional[str] = field(default=None)
    
