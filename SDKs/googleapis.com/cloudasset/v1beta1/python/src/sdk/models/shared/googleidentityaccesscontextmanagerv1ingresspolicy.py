from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleIdentityAccesscontextmanagerV1IngressPolicy:
    r"""GoogleIdentityAccesscontextmanagerV1IngressPolicy
    Policy for ingress into ServicePerimeter. IngressPolicies match requests based on `ingress_from` and `ingress_to` stanzas. For an ingress policy to match, both the `ingress_from` and `ingress_to` stanzas must be matched. If an IngressPolicy matches a request, the request is allowed through the perimeter boundary from outside the perimeter. For example, access from the internet can be allowed either based on an AccessLevel or, for traffic hosted on Google Cloud, the project of the source network. For access from private networks, using the project of the hosting network is required. Individual ingress policies can be limited by restricting which services and/or actions they match using the `ingress_to` field.
    """
    
    ingress_from: Optional[GoogleIdentityAccesscontextmanagerV1IngressFrom] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingressFrom') }})
    ingress_to: Optional[GoogleIdentityAccesscontextmanagerV1IngressTo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingressTo') }})
    
