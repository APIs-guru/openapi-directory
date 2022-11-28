from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EndpointNetworkTypeEnum(str, Enum):
    NETWORK_TYPE_UNSPECIFIED = "NETWORK_TYPE_UNSPECIFIED"
    GCP_NETWORK = "GCP_NETWORK"
    NON_GCP_NETWORK = "NON_GCP_NETWORK"


@dataclass_json
@dataclass
class Endpoint:
    r"""Endpoint
    Source or destination of the Connectivity Test.
    """
    
    app_engine_version: Optional[AppEngineVersionEndpoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appEngineVersion') }})
    cloud_function: Optional[CloudFunctionEndpoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudFunction') }})
    cloud_run_revision: Optional[CloudRunRevisionEndpoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudRunRevision') }})
    cloud_sql_instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudSqlInstance') }})
    gke_master_cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeMasterCluster') }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddress') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    network_type: Optional[EndpointNetworkTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkType') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    
