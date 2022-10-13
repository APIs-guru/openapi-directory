from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import subordinateconfigchain


@dataclass_json
@dataclass
class SubordinateConfig:
    certificate_authority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certificateAuthority' }})
    pem_issuer_chain: Optional[subordinateconfigchain.SubordinateConfigChain] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pemIssuerChain' }})
    
