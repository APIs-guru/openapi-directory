from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDocumentaiV1ProcessResponse:
    r"""GoogleCloudDocumentaiV1ProcessResponse
    Response message for the process document method.
    """
    
    document: Optional[GoogleCloudDocumentaiV1Document] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    human_review_status: Optional[GoogleCloudDocumentaiV1HumanReviewStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('humanReviewStatus') }})
    
