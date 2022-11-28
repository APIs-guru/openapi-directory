from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage:
    r"""GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
    Holds one or more instances of `ClaimReview` markup for a webpage.
    """
    
    claim_review_author: Optional[GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claimReviewAuthor') }})
    claim_review_markups: Optional[List[GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claimReviewMarkups') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageUrl') }})
    publish_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishDate') }})
    version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('versionId') }})
    
