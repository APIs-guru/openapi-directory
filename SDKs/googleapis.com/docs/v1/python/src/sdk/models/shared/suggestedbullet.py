from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SuggestedBullet:
    r"""SuggestedBullet
    A suggested change to a Bullet.
    """
    
    bullet: Optional[Bullet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bullet') }})
    bullet_suggestion_state: Optional[BulletSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bulletSuggestionState') }})
    
