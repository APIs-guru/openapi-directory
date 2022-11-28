from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudNetworksecurityV1beta1GrpcEndpoint:
    r"""GoogleCloudNetworksecurityV1beta1GrpcEndpoint
    Specification of the GRPC Endpoint.
    """
    
    target_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetUri') }})
    
