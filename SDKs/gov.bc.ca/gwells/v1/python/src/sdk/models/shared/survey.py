from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SurveyPageEnum(str, Enum):
    W = "w"
    R = "r"
    S = "s"
    A = "a"


@dataclass_json
@dataclass
class Survey:
    survey_guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'survey_guid' }})
    survey_introduction_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'survey_introduction_text' }})
    survey_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'survey_link' }})
    survey_page: Optional[SurveyPageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'survey_page' }})
    
