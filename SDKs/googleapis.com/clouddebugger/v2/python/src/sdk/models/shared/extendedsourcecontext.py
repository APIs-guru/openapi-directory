from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExtendedSourceContext:
    r"""ExtendedSourceContext
    An ExtendedSourceContext is a SourceContext combined with additional details describing the context.
    """
    
    context: Optional[SourceContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    
