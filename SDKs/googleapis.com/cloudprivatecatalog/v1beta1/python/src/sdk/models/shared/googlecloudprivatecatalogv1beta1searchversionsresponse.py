from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse:
    r"""GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse
    Response message for PrivateCatalog.SearchVersions.
    """
    
    next_page_token: Optional[str] = field(default=None)
    versions: Optional[List[GoogleCloudPrivatecatalogV1beta1Version]] = field(default=None)
    
