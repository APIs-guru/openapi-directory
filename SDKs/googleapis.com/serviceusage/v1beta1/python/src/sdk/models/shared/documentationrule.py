from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DocumentationRule:
    r"""DocumentationRule
    A documentation rule provides information about individual API elements.
    """
    
    deprecation_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecationDescription') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    selector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selector') }})
    
