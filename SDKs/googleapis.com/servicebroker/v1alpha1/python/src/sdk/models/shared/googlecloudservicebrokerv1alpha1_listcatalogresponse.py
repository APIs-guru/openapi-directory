from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GoogleCloudServicebrokerV1alpha1ListCatalogResponse:
    r"""GoogleCloudServicebrokerV1alpha1ListCatalogResponse
    Response message for the `ListCatalog()` method.
    """
    
    description: Optional[str] = field(default=None)
    next_page_token: Optional[str] = field(default=None)
    services: Optional[List[GoogleCloudServicebrokerV1alpha1Service]] = field(default=None)
    
