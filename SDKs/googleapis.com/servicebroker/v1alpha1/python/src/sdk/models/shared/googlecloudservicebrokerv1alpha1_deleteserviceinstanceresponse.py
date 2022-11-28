from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GoogleCloudServicebrokerV1alpha1DeleteServiceInstanceResponse:
    r"""GoogleCloudServicebrokerV1alpha1DeleteServiceInstanceResponse
    Response for the `DeleteServiceInstance()` method.
    """
    
    description: Optional[str] = field(default=None)
    operation: Optional[str] = field(default=None)
    
