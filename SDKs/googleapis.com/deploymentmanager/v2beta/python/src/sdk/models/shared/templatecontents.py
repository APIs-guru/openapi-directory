from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TemplateContentsInterpreterEnum(str, Enum):
    UNKNOWN_INTERPRETER = "UNKNOWN_INTERPRETER"
    PYTHON = "PYTHON"
    JINJA = "JINJA"


@dataclass_json
@dataclass
class TemplateContents:
    r"""TemplateContents
    Files that make up the template contents of a template type.
    """
    
    imports: Optional[List[ImportFile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imports') }})
    interpreter: Optional[TemplateContentsInterpreterEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interpreter') }})
    main_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainTemplate') }})
    schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    
