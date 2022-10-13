from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import appengine
from . import basicservice
from . import cloudendpoints
from . import cloudrun
from . import clusteristio
from . import gkenamespace
from . import gkeservice
from . import gkeworkload
from . import istiocanonicalservice
from . import meshistio
from . import telemetry


@dataclass_json
@dataclass
class Service:
    app_engine: Optional[appengine.AppEngine] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appEngine' }})
    basic_service: Optional[basicservice.BasicService] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'basicService' }})
    cloud_endpoints: Optional[cloudendpoints.CloudEndpoints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudEndpoints' }})
    cloud_run: Optional[cloudrun.CloudRun] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudRun' }})
    cluster_istio: Optional[clusteristio.ClusterIstio] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterIstio' }})
    custom: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    gke_namespace: Optional[gkenamespace.GkeNamespace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gkeNamespace' }})
    gke_service: Optional[gkeservice.GkeService] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gkeService' }})
    gke_workload: Optional[gkeworkload.GkeWorkload] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gkeWorkload' }})
    istio_canonical_service: Optional[istiocanonicalservice.IstioCanonicalService] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'istioCanonicalService' }})
    mesh_istio: Optional[meshistio.MeshIstio] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meshIstio' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    telemetry: Optional[telemetry.Telemetry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'telemetry' }})
    user_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userLabels' }})
    
