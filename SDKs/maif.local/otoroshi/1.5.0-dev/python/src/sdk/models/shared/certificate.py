from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Certificate:
    r"""Certificate
    A SSL/TLS X509 certificate
    """
    
    auto_renew: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoRenew') }})
    ca: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ca') }})
    ca_ref: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('caRef') }})
    chain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('chain') }})
    domain: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    from_: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    private_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateKey') }})
    self_signed: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfSigned') }})
    subject: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    to: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    valid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('valid') }})
    
