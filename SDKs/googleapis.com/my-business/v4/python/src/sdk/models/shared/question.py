from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import author
from . import answer


@dataclass_json
@dataclass
class Question:
    author: Optional[author.Author] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    top_answers: Optional[List[answer.Answer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topAnswers' }})
    total_answer_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalAnswerCount' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    upvote_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upvoteCount' }})
    
