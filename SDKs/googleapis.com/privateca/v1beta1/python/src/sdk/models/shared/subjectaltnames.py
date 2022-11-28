from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SubjectAltNames:
    r"""SubjectAltNames
    SubjectAltNames corresponds to a more modern way of listing what the asserted identity is in a certificate (i.e., compared to the \"common name\" in the distinguished name).
    """
    
    custom_sans: Optional[List[X509Extension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customSans') }})
    dns_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsNames') }})
    email_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddresses') }})
    ip_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddresses') }})
    uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uris') }})
    
