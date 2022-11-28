from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Build:
    r"""Build
    Note holding the version of the provider's builder and the signature of the provenance message in the build details occurrence.
    """
    
    builder_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('builderVersion') }})
    signature: Optional[BuildSignature] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signature') }})
    
