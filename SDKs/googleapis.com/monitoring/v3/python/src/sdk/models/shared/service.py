from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ServiceInput:
    r"""ServiceInput
    A Service is a discrete, autonomous, and network-accessible unit, designed to solve an individual concern (Wikipedia (https://en.wikipedia.org/wiki/Service-orientation)). In Cloud Monitoring, a Service acts as the root resource under which operational aspects of the service are accessible.
    """
    
    app_engine: Optional[AppEngine] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appEngine') }})
    basic_service: Optional[BasicService] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicService') }})
    cloud_endpoints: Optional[CloudEndpoints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudEndpoints') }})
    cloud_run: Optional[CloudRun] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudRun') }})
    cluster_istio: Optional[ClusterIstio] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterIstio') }})
    custom: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    gke_namespace: Optional[GkeNamespaceInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeNamespace') }})
    gke_service: Optional[GkeServiceInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeService') }})
    gke_workload: Optional[GkeWorkloadInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeWorkload') }})
    istio_canonical_service: Optional[IstioCanonicalService] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('istioCanonicalService') }})
    mesh_istio: Optional[MeshIstio] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshIstio') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    telemetry: Optional[Telemetry] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telemetry') }})
    user_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLabels') }})
    

@dataclass_json
@dataclass
class Service:
    r"""Service
    A Service is a discrete, autonomous, and network-accessible unit, designed to solve an individual concern (Wikipedia (https://en.wikipedia.org/wiki/Service-orientation)). In Cloud Monitoring, a Service acts as the root resource under which operational aspects of the service are accessible.
    """
    
    app_engine: Optional[AppEngine] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appEngine') }})
    basic_service: Optional[BasicService] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicService') }})
    cloud_endpoints: Optional[CloudEndpoints] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudEndpoints') }})
    cloud_run: Optional[CloudRun] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudRun') }})
    cluster_istio: Optional[ClusterIstio] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clusterIstio') }})
    custom: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    gke_namespace: Optional[GkeNamespace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeNamespace') }})
    gke_service: Optional[GkeService] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeService') }})
    gke_workload: Optional[GkeWorkload] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeWorkload') }})
    istio_canonical_service: Optional[IstioCanonicalService] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('istioCanonicalService') }})
    mesh_istio: Optional[MeshIstio] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshIstio') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    telemetry: Optional[Telemetry] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telemetry') }})
    user_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLabels') }})
    
