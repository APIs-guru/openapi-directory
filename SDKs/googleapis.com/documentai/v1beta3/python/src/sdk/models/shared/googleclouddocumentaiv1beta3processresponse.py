from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1beta3document
from . import googleclouddocumentaiv1beta3humanreviewstatus


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3ProcessResponse:
    document: Optional[googleclouddocumentaiv1beta3document.GoogleCloudDocumentaiV1beta3Document] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document' }})
    human_review_operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'humanReviewOperation' }})
    human_review_status: Optional[googleclouddocumentaiv1beta3humanreviewstatus.GoogleCloudDocumentaiV1beta3HumanReviewStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'humanReviewStatus' }})
    
