from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class QuotePreviewV1:
    r"""QuotePreviewV1
    A quote preview provides information about a quote within a submission.
    """
    
    product_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('product_id') }})
    quote_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quote_id') }})
    
