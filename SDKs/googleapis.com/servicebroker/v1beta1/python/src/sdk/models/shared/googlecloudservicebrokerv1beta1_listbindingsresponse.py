from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GoogleCloudServicebrokerV1beta1ListBindingsResponse:
    r"""GoogleCloudServicebrokerV1beta1ListBindingsResponse
    The response for the `ListBindings()` method.
    """
    
    bindings: Optional[List[GoogleCloudServicebrokerV1beta1Binding]] = field(default=None)
    description: Optional[str] = field(default=None)
    next_page_token: Optional[str] = field(default=None)
    
