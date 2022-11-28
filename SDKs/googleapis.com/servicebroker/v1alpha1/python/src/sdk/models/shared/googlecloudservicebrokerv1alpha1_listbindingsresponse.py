from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GoogleCloudServicebrokerV1alpha1ListBindingsResponse:
    r"""GoogleCloudServicebrokerV1alpha1ListBindingsResponse
    The response for the `ListBindings()` method.
    """
    
    bindings: Optional[List[GoogleCloudServicebrokerV1alpha1Binding]] = field(default=None)
    description: Optional[str] = field(default=None)
    next_page_token: Optional[str] = field(default=None)
    
