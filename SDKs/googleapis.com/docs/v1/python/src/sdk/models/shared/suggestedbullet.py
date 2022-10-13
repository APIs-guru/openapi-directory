from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import bullet
from . import bulletsuggestionstate


@dataclass_json
@dataclass
class SuggestedBullet:
    bullet: Optional[bullet.Bullet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bullet' }})
    bullet_suggestion_state: Optional[bulletsuggestionstate.BulletSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bulletSuggestionState' }})
    
