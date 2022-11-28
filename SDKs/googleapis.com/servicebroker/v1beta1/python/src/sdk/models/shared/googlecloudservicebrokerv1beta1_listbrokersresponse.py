from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GoogleCloudServicebrokerV1beta1ListBrokersResponse:
    r"""GoogleCloudServicebrokerV1beta1ListBrokersResponse
    The response for the `ListBrokers()` method.
    """
    
    brokers: Optional[List[GoogleCloudServicebrokerV1beta1Broker]] = field(default=None)
    next_page_token: Optional[str] = field(default=None)
    
