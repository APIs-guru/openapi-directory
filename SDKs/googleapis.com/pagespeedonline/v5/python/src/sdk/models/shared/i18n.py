from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class I18n:
    r"""I18n
    Message containing the i18n data for the LHR - Version 1.
    """
    
    renderer_formatted_strings: Optional[RendererFormattedStrings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rendererFormattedStrings') }})
    
