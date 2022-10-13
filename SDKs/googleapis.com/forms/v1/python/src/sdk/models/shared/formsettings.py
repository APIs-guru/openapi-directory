from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import quizsettings


@dataclass_json
@dataclass
class FormSettings:
    quiz_settings: Optional[quizsettings.QuizSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quizSettings' }})
    
