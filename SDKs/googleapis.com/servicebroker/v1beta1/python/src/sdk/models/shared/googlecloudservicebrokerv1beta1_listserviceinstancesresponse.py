from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GoogleCloudServicebrokerV1beta1ListServiceInstancesResponse:
    r"""GoogleCloudServicebrokerV1beta1ListServiceInstancesResponse
    The response for the `ListServiceInstances()` method.
    """
    
    description: Optional[str] = field(default=None)
    instances: Optional[List[GoogleCloudServicebrokerV1beta1ServiceInstance]] = field(default=None)
    next_page_token: Optional[str] = field(default=None)
    
