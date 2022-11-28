from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Hint:
    r"""Hint
    This submessage provides human-readable hints about the purpose of the authority. Because the name of a note acts as its resource reference, it is important to disambiguate the canonical name of the Note (which might be a UUID for security purposes) from \"readable\" names more suitable for debug output. Note that these hints should not be used to look up authorities in security sensitive contexts, such as when looking up attestations to verify.
    """
    
    human_readable_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('humanReadableName') }})
    
