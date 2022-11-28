from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from . import *


@dataclass
class GoogleCloudServicebrokerV1beta1Service:
    r"""GoogleCloudServicebrokerV1beta1Service
    The resource model mostly follows the Open Service Broker API, as
    described here:
    https://github.com/openservicebrokerapi/servicebroker/blob/master/_spec.md
    Though due to Google Specifics it has additional optional fields.
    """
    
    bindable: Optional[bool] = field(default=None)
    binding_retrievable: Optional[bool] = field(default=None)
    bindings_retrievable: Optional[bool] = field(default=None)
    dashboard_client: Optional[GoogleCloudServicebrokerV1beta1DashboardClient] = field(default=None)
    description: Optional[str] = field(default=None)
    id: Optional[str] = field(default=None)
    instances_retrievable: Optional[bool] = field(default=None)
    metadata: Optional[dict[str, Any]] = field(default=None)
    name: Optional[str] = field(default=None)
    plan_updateable: Optional[bool] = field(default=None)
    plans: Optional[List[GoogleCloudServicebrokerV1beta1Plan]] = field(default=None)
    tags: Optional[List[str]] = field(default=None)
    
