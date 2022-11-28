from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GoogleCloudPrivatecatalogproducerV1beta1ListAssociationsResponse:
    associations: Optional[List[GoogleCloudPrivatecatalogproducerV1beta1Association]] = field(default=None)
    next_page_token: Optional[str] = field(default=None)
    
