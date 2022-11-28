from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DocumentDelete:
    r"""DocumentDelete
    A Document has been deleted. May be the result of multiple writes, including updates, the last of which deleted the Document. Multiple DocumentDelete messages may be returned for the same logical delete, if multiple targets are affected.
    """
    
    document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    read_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readTime') }})
    removed_target_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removedTargetIds') }})
    
