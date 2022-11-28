from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GoogleCloudServicebrokerV1beta1ListCatalogResponse:
    r"""GoogleCloudServicebrokerV1beta1ListCatalogResponse
    Response message for the `ListCatalog()` method.
    """
    
    description: Optional[str] = field(default=None)
    next_page_token: Optional[str] = field(default=None)
    services: Optional[List[GoogleCloudServicebrokerV1beta1Service]] = field(default=None)
    
