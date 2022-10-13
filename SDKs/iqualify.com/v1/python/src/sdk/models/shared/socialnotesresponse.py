from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SocialNotesResponse:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    page_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageId' }})
    person_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personId' }})
    social_note_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'social-note-content' }})
    social_note_paragraph_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'social-note-paragraphId' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
