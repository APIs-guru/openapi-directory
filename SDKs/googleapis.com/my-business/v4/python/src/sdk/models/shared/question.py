from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Question:
    r"""Question
    Represents a single question and some of its answers.
    """
    
    author: Optional[Author] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    top_answers: Optional[List[Answer]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topAnswers') }})
    total_answer_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalAnswerCount') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    upvote_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upvoteCount') }})
    
