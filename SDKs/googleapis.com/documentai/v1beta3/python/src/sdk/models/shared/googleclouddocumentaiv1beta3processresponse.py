from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1beta3ProcessResponse:
    r"""GoogleCloudDocumentaiV1beta3ProcessResponse
    Response message for the process document method.
    """
    
    document: Optional[GoogleCloudDocumentaiV1beta3Document] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    human_review_operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('humanReviewOperation') }})
    human_review_status: Optional[GoogleCloudDocumentaiV1beta3HumanReviewStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('humanReviewStatus') }})
    
