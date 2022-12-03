from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SubmissionV1:
    r"""SubmissionV1
    A submission is a set of information submitted by a producer to institutions in order to get quotes.
    """
    
    application: ApplicationWriteV1 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('application') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    producer_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('producer_id') }})
    quote_previews: list[QuotePreviewV1] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quote_previews') }})
    
