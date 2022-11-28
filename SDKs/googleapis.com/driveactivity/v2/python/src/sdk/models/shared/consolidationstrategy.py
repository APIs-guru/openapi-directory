from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConsolidationStrategy:
    r"""ConsolidationStrategy
    How the individual activities are consolidated. A set of activities may be consolidated into one combined activity if they are related in some way, such as one actor performing the same action on multiple targets, or multiple actors performing the same action on a single target. The strategy defines the rules for which activities are related.
    """
    
    legacy: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legacy') }})
    none: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('none') }})
    
