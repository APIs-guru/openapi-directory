from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1HumanAnnotationConfig:
    annotated_dataset_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotatedDatasetDescription' }})
    annotated_dataset_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotatedDatasetDisplayName' }})
    contributor_emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contributorEmails' }})
    instruction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instruction' }})
    label_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelGroup' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    question_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'questionDuration' }})
    replica_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replicaCount' }})
    user_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userEmailAddress' }})
    
