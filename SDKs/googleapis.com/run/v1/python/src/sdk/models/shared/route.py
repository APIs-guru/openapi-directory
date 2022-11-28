from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Route:
    r"""Route
    Route is responsible for configuring ingress over a collection of Revisions. Some of the Revisions a Route distributes traffic over may be specified by referencing the Configuration responsible for creating them; in these cases the Route is additionally responsible for monitoring the Configuration for \"latest ready\" revision changes, and smoothly rolling out latest revisions. See also: https://github.com/knative/specs/blob/main/specs/serving/overview.md#route Cloud Run currently supports referencing a single Configuration to automatically deploy the \"latest ready\" Revision from that Configuration.
    """
    
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiVersion') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    metadata: Optional[ObjectMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    spec: Optional[RouteSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    status: Optional[RouteStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
