from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bullet
from . import paragraphelement
from . import paragraphstyle
from . import suggestedbullet
from . import suggestedparagraphstyle
from . import objectreferences


@dataclass_json
@dataclass
class Paragraph:
    bullet: Optional[bullet.Bullet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bullet' }})
    elements: Optional[List[paragraphelement.ParagraphElement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'elements' }})
    paragraph_style: Optional[paragraphstyle.ParagraphStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paragraphStyle' }})
    positioned_object_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'positionedObjectIds' }})
    suggested_bullet_changes: Optional[dict[str, suggestedbullet.SuggestedBullet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedBulletChanges' }})
    suggested_paragraph_style_changes: Optional[dict[str, suggestedparagraphstyle.SuggestedParagraphStyle]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedParagraphStyleChanges' }})
    suggested_positioned_object_ids: Optional[dict[str, objectreferences.ObjectReferences]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedPositionedObjectIds' }})
    
