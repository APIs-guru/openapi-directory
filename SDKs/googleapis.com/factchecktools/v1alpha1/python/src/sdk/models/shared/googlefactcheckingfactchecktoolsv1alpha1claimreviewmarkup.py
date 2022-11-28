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
class GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup:
    r"""GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup
    Fields for an individual `ClaimReview` element. Except for sub-messages that group fields together, each of these fields correspond those in https://schema.org/ClaimReview. We list the precise mapping for each field.
    """
    
    claim_appearances: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claimAppearances') }})
    claim_author: Optional[GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claimAuthor') }})
    claim_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claimDate') }})
    claim_first_appearance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claimFirstAppearance') }})
    claim_location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claimLocation') }})
    claim_reviewed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('claimReviewed') }})
    rating: Optional[GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
