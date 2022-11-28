from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Secrets:
    r"""Secrets
    Secrets and secret environment variables.
    """
    
    inline: Optional[List[InlineSecret]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inline') }})
    secret_manager: Optional[List[SecretManagerSecret]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretManager') }})
    
