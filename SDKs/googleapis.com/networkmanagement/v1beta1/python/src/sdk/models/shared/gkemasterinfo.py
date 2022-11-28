from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GkeMasterInfo:
    r"""GkeMasterInfo
    For display only. Metadata associated with a Google Kubernetes Engine (GKE) cluster master.
    """
    
    cluster_network_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterNetworkUri') }})
    cluster_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterUri') }})
    external_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalIp') }})
    internal_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalIp') }})
    
