from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ContentTypeInfo:
    r"""ContentTypeInfo
    # gdata.* are outside protos with mising documentation
    """
    
    best_guess: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bestGuess') }})
    from_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromBytes') }})
    from_file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromFileName') }})
    from_header: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromHeader') }})
    from_url_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromUrlPath') }})
    
