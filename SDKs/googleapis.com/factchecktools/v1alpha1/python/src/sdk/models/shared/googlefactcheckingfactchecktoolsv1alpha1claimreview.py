from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview:
    r"""GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview
    Information about a claim review.
    """
    
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    publisher: Optional[GoogleFactcheckingFactchecktoolsV1alpha1Publisher] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisher') }})
    review_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviewDate') }})
    textual_rating: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textualRating') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
