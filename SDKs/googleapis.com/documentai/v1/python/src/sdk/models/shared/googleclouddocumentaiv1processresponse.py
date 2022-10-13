from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddocumentaiv1document
from . import googleclouddocumentaiv1humanreviewstatus


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1ProcessResponse:
    document: Optional[googleclouddocumentaiv1document.GoogleCloudDocumentaiV1Document] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document' }})
    human_review_status: Optional[googleclouddocumentaiv1humanreviewstatus.GoogleCloudDocumentaiV1HumanReviewStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'humanReviewStatus' }})
    
