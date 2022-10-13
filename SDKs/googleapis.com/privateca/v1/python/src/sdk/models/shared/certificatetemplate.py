from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import certificateidentityconstraints
from . import certificateextensionconstraints
from . import x509parameters


@dataclass_json
@dataclass
class CertificateTemplate:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    identity_constraints: Optional[certificateidentityconstraints.CertificateIdentityConstraints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityConstraints' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    passthrough_extensions: Optional[certificateextensionconstraints.CertificateExtensionConstraints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passthroughExtensions' }})
    predefined_values: Optional[x509parameters.X509Parameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predefinedValues' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
