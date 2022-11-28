from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GoogleCloudServicebrokerV1beta1CreateBindingResponse:
    r"""GoogleCloudServicebrokerV1beta1CreateBindingResponse
    Response for the `CreateBinding()` method.
    """
    
    credentials: Optional[dict[str, Any]] = field(default=None)
    description: Optional[str] = field(default=None)
    operation: Optional[str] = field(default=None)
    route_service_url: Optional[str] = field(default=None)
    syslog_drain_url: Optional[str] = field(default=None)
    volume_mounts: Optional[List[dict[str, Any]]] = field(default=None)
    
