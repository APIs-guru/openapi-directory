from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GoogleCloudServicebrokerV1beta1DashboardClient:
    r"""GoogleCloudServicebrokerV1beta1DashboardClient
    Message containing information required to activate Dashboard SSO feature.
    """
    
    id: Optional[str] = field(default=None)
    redirect_uri: Optional[str] = field(default=None)
    secret: Optional[str] = field(default=None)
    
