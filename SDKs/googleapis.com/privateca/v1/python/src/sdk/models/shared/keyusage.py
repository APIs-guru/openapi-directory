from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class KeyUsage:
    r"""KeyUsage
    A KeyUsage describes key usage values that may appear in an X.509 certificate.
    """
    
    base_key_usage: Optional[KeyUsageOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseKeyUsage') }})
    extended_key_usage: Optional[ExtendedKeyUsageOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extendedKeyUsage') }})
    unknown_extended_key_usages: Optional[List[ObjectID]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unknownExtendedKeyUsages') }})
    
