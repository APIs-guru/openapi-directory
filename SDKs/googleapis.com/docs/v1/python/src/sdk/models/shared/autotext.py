from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import suggestedtextstyle
from . import textstyle

class AutoTextTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    PAGE_NUMBER = "PAGE_NUMBER"
    PAGE_COUNT = "PAGE_COUNT"


@dataclass_json
@dataclass
class AutoText:
    suggested_deletion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedDeletionIds' }})
    suggested_insertion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedInsertionIds' }})
    suggested_text_style_changes: Optional[dict[str, suggestedtextstyle.SuggestedTextStyle]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedTextStyleChanges' }})
    text_style: Optional[textstyle.TextStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textStyle' }})
    type: Optional[AutoTextTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
