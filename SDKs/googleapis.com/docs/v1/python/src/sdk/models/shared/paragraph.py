from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Paragraph:
    r"""Paragraph
    A StructuralElement representing a paragraph. A paragraph is a range of content that's terminated with a newline character.
    """
    
    bullet: Optional[Bullet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bullet') }})
    elements: Optional[List[ParagraphElement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elements') }})
    paragraph_style: Optional[ParagraphStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paragraphStyle') }})
    positioned_object_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('positionedObjectIds') }})
    suggested_bullet_changes: Optional[dict[str, SuggestedBullet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedBulletChanges') }})
    suggested_paragraph_style_changes: Optional[dict[str, SuggestedParagraphStyle]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedParagraphStyleChanges') }})
    suggested_positioned_object_ids: Optional[dict[str, ObjectReferences]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedPositionedObjectIds') }})
    

@dataclass_json
@dataclass
class ParagraphInput:
    r"""ParagraphInput
    A StructuralElement representing a paragraph. A paragraph is a range of content that's terminated with a newline character.
    """
    
    bullet: Optional[Bullet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bullet') }})
    elements: Optional[List[ParagraphElementInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elements') }})
    paragraph_style: Optional[ParagraphStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paragraphStyle') }})
    positioned_object_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('positionedObjectIds') }})
    suggested_bullet_changes: Optional[dict[str, SuggestedBullet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedBulletChanges') }})
    suggested_paragraph_style_changes: Optional[dict[str, SuggestedParagraphStyle]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedParagraphStyleChanges') }})
    suggested_positioned_object_ids: Optional[dict[str, ObjectReferences]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedPositionedObjectIds') }})
    
