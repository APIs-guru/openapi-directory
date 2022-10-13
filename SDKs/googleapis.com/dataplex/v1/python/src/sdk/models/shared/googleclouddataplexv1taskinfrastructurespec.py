from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1taskinfrastructurespecbatchcomputeresources
from . import googleclouddataplexv1taskinfrastructurespeccontainerimageruntime
from . import googleclouddataplexv1taskinfrastructurespecvpcnetwork


@dataclass_json
@dataclass
class GoogleCloudDataplexV1TaskInfrastructureSpec:
    batch: Optional[googleclouddataplexv1taskinfrastructurespecbatchcomputeresources.GoogleCloudDataplexV1TaskInfrastructureSpecBatchComputeResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batch' }})
    container_image: Optional[googleclouddataplexv1taskinfrastructurespeccontainerimageruntime.GoogleCloudDataplexV1TaskInfrastructureSpecContainerImageRuntime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerImage' }})
    vpc_network: Optional[googleclouddataplexv1taskinfrastructurespecvpcnetwork.GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpcNetwork' }})
    
