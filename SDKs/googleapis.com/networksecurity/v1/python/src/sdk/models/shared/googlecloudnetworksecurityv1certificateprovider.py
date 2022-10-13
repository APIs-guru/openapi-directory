from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import certificateproviderinstance
from . import googlecloudnetworksecurityv1grpcendpoint


@dataclass_json
@dataclass
class GoogleCloudNetworksecurityV1CertificateProvider:
    certificate_provider_instance: Optional[certificateproviderinstance.CertificateProviderInstance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateProviderInstance' }})
    grpc_endpoint: Optional[googlecloudnetworksecurityv1grpcendpoint.GoogleCloudNetworksecurityV1GrpcEndpoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grpcEndpoint' }})
    
