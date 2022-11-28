from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TestLdapConnectionRepresentation:
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    bind_credential: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bindCredential') }})
    bind_dn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bindDn') }})
    component_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentId') }})
    connection_timeout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionTimeout') }})
    connection_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectionUrl') }})
    start_tls: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTls') }})
    use_truststore_spi: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useTruststoreSpi') }})
    
