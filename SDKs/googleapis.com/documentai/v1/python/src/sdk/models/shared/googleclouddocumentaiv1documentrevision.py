from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1documentrevisionhumanreview


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1DocumentRevision:
    agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agent' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    human_review: Optional[googleclouddocumentaiv1documentrevisionhumanreview.GoogleCloudDocumentaiV1DocumentRevisionHumanReview] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'humanReview' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    parent: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    parent_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentIds' }})
    processor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processor' }})
    
