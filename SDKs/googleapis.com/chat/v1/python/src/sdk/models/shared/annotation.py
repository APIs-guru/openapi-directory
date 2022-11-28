from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AnnotationTypeEnum(str, Enum):
    ANNOTATION_TYPE_UNSPECIFIED = "ANNOTATION_TYPE_UNSPECIFIED"
    USER_MENTION = "USER_MENTION"
    SLASH_COMMAND = "SLASH_COMMAND"


@dataclass_json
@dataclass
class Annotation:
    r"""Annotation
    Annotations associated with the plain-text body of the message. Example plain-text message body: ``` Hello @FooBot how are you!\" ``` The corresponding annotations metadata: ``` \"annotations\":[{ \"type\":\"USER_MENTION\", \"startIndex\":6, \"length\":7, \"userMention\": { \"user\": { \"name\":\"users/107946847022116401880\", \"displayName\":\"FooBot\", \"avatarUrl\":\"https://goo.gl/aeDtrS\", \"type\":\"BOT\" }, \"type\":\"MENTION\" } }] ```
    """
    
    length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    slash_command: Optional[SlashCommandMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slashCommand') }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startIndex') }})
    type: Optional[AnnotationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    user_mention: Optional[UserMentionMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userMention') }})
    
