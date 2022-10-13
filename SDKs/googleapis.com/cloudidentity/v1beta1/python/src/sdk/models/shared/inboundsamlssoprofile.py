from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import samlidpconfig
from . import samlspconfig


@dataclass_json
@dataclass
class InboundSamlSsoProfile:
    customer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    idp_config: Optional[samlidpconfig.SamlIdpConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idpConfig' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    sp_config: Optional[samlspconfig.SamlSpConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spConfig' }})
    
