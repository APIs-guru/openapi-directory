from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudnetworksecurityv1beta1certificateprovider
from . import validationca


@dataclass_json
@dataclass
class ClientTLSPolicy:
    client_certificate: Optional[googlecloudnetworksecurityv1beta1certificateprovider.GoogleCloudNetworksecurityV1beta1CertificateProvider] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientCertificate' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    server_validation_ca: Optional[List[validationca.ValidationCa]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverValidationCa' }})
    sni: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sni' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
