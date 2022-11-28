from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GoogleCloudServicebrokerV1beta1CreateServiceInstanceResponse:
    r"""GoogleCloudServicebrokerV1beta1CreateServiceInstanceResponse
    Response for the `CreateServiceInstance()` method.
    """
    
    description: Optional[str] = field(default=None)
    operation: Optional[str] = field(default=None)
    
