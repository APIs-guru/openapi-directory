from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GoogleCloudPrivatecatalogproducerV1beta1ListVersionsResponse:
    next_page_token: Optional[str] = field(default=None)
    versions: Optional[List[GoogleCloudPrivatecatalogproducerV1beta1Version]] = field(default=None)
    
