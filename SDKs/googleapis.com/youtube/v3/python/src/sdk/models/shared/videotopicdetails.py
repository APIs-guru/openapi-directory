from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VideoTopicDetails:
    relevant_topic_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relevantTopicIds' }})
    topic_categories: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topicCategories' }})
    topic_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topicIds' }})
    
