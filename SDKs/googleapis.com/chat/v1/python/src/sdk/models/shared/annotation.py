from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import slashcommandmetadata
from . import usermentionmetadata

class AnnotationTypeEnum(str, Enum):
    ANNOTATION_TYPE_UNSPECIFIED = "ANNOTATION_TYPE_UNSPECIFIED"
    USER_MENTION = "USER_MENTION"
    SLASH_COMMAND = "SLASH_COMMAND"


@dataclass_json
@dataclass
class Annotation:
    length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'length' }})
    slash_command: Optional[slashcommandmetadata.SlashCommandMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slashCommand' }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startIndex' }})
    type: Optional[AnnotationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    user_mention: Optional[usermentionmetadata.UserMentionMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userMention' }})
    
