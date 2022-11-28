from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudNetworksecurityV1beta1CertificateProvider:
    r"""GoogleCloudNetworksecurityV1beta1CertificateProvider
    Specification of certificate provider. Defines the mechanism to obtain the certificate and private key for peer to peer authentication.
    """
    
    certificate_provider_instance: Optional[CertificateProviderInstance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateProviderInstance') }})
    grpc_endpoint: Optional[GoogleCloudNetworksecurityV1beta1GrpcEndpoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grpcEndpoint') }})
    
