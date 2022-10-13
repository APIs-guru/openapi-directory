from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1humanreviewlabelingmetadata
from . import googleclouddocumentaiv1humanreviewvalidationmetadata


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1PropertyMetadata:
    human_review_labeling_metadata: Optional[googleclouddocumentaiv1humanreviewlabelingmetadata.GoogleCloudDocumentaiV1HumanReviewLabelingMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'humanReviewLabelingMetadata' }})
    human_review_metadata: Optional[googleclouddocumentaiv1humanreviewvalidationmetadata.GoogleCloudDocumentaiV1HumanReviewValidationMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'humanReviewMetadata' }})
    inactive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inactive' }})
    
