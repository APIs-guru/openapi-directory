from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1environmentinfrastructurespeccomputeresources
from . import googleclouddataplexv1environmentinfrastructurespecosimageruntime


@dataclass_json
@dataclass
class GoogleCloudDataplexV1EnvironmentInfrastructureSpec:
    compute: Optional[googleclouddataplexv1environmentinfrastructurespeccomputeresources.GoogleCloudDataplexV1EnvironmentInfrastructureSpecComputeResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compute' }})
    os_image: Optional[googleclouddataplexv1environmentinfrastructurespecosimageruntime.GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osImage' }})
    
