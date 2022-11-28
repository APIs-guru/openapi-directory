from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GoogleCloudServicebrokerV1alpha1Operation:
    r"""GoogleCloudServicebrokerV1alpha1Operation
    Describes a long running operation, which conforms to OpenService API.
    """
    
    description: Optional[str] = field(default=None)
    state: Optional[str] = field(default=None)
    
