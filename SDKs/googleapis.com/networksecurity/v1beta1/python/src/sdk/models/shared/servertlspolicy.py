from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import mtlspolicy
from . import googlecloudnetworksecurityv1beta1certificateprovider


@dataclass_json
@dataclass
class ServerTLSPolicy:
    allow_open: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowOpen' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    mtls_policy: Optional[mtlspolicy.MtlsPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mtlsPolicy' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    server_certificate: Optional[googlecloudnetworksecurityv1beta1certificateprovider.GoogleCloudNetworksecurityV1beta1CertificateProvider] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverCertificate' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
