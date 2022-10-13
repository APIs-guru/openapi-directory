from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import collectionoverride
from . import credential
from . import typeproviderlabelentry
from . import operation
from . import options


@dataclass_json
@dataclass
class TypeProvider:
    collection_overrides: Optional[List[collectionoverride.CollectionOverride]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectionOverrides' }})
    credential: Optional[credential.Credential] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credential' }})
    custom_certificate_authority_roots: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customCertificateAuthorityRoots' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    descriptor_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'descriptorUrl' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    insert_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertTime' }})
    labels: Optional[List[typeproviderlabelentry.TypeProviderLabelEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operation: Optional[operation.Operation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    options: Optional[options.Options] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    
