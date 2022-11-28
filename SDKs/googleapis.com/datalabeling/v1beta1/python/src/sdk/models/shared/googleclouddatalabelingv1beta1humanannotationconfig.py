from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1HumanAnnotationConfig:
    r"""GoogleCloudDatalabelingV1beta1HumanAnnotationConfig
    Configuration for how human labeling task should be done.
    """
    
    annotated_dataset_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotatedDatasetDescription') }})
    annotated_dataset_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotatedDatasetDisplayName') }})
    contributor_emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contributorEmails') }})
    instruction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instruction') }})
    label_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelGroup') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    question_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('questionDuration') }})
    replica_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replicaCount') }})
    user_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userEmailAddress') }})
    
