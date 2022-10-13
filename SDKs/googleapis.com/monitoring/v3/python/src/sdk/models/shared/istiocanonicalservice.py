from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IstioCanonicalService:
    canonical_service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canonicalService' }})
    canonical_service_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canonicalServiceNamespace' }})
    mesh_uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meshUid' }})
    
