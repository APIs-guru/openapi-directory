from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta3humanreviewlabelingmetadata
from . import googleclouddocumentaiv1beta3humanreviewvalidationmetadata


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3PropertyMetadata:
    human_review_labeling_metadata: Optional[googleclouddocumentaiv1beta3humanreviewlabelingmetadata.GoogleCloudDocumentaiV1beta3HumanReviewLabelingMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'humanReviewLabelingMetadata' }})
    human_review_metadata: Optional[googleclouddocumentaiv1beta3humanreviewvalidationmetadata.GoogleCloudDocumentaiV1beta3HumanReviewValidationMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'humanReviewMetadata' }})
    inactive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inactive' }})
    
