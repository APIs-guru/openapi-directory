from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NamedStyles:
    r"""NamedStyles
    The named styles. Paragraphs in the document can inherit their TextStyle and ParagraphStyle from these named styles.
    """
    
    styles: Optional[List[NamedStyle]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('styles') }})
    
