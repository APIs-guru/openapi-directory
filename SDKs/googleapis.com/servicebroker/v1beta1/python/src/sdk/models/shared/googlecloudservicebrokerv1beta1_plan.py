from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GoogleCloudServicebrokerV1beta1Plan:
    r"""GoogleCloudServicebrokerV1beta1Plan
    Plan message describes a Service Plan.
    """
    
    bindable: Optional[bool] = field(default=None)
    description: Optional[str] = field(default=None)
    free: Optional[bool] = field(default=None)
    id: Optional[str] = field(default=None)
    metadata: Optional[dict[str, Any]] = field(default=None)
    name: Optional[str] = field(default=None)
    schemas: Optional[dict[str, Any]] = field(default=None)
    
