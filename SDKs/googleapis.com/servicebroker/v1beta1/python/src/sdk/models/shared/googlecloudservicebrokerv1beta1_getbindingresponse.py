from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GoogleCloudServicebrokerV1beta1GetBindingResponse:
    r"""GoogleCloudServicebrokerV1beta1GetBindingResponse
    Response for the `GetBinding()` method.
    """
    
    credentials: Optional[dict[str, Any]] = field(default=None)
    deployment_name: Optional[str] = field(default=None)
    description: Optional[str] = field(default=None)
    resource_name: Optional[str] = field(default=None)
    route_service_url: Optional[str] = field(default=None)
    syslog_drain_url: Optional[str] = field(default=None)
    volume_mounts: Optional[List[dict[str, Any]]] = field(default=None)
    
