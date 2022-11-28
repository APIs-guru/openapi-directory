from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GoogleCloudServicebrokerV1beta1DeleteBindingResponse:
    r"""GoogleCloudServicebrokerV1beta1DeleteBindingResponse
    Response for the `DeleteBinding()` method.
    """
    
    description: Optional[str] = field(default=None)
    operation: Optional[str] = field(default=None)
    
