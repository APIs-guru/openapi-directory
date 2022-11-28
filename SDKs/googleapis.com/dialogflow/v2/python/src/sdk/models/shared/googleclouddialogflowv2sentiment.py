from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2Sentiment:
    r"""GoogleCloudDialogflowV2Sentiment
    The sentiment, such as positive/negative feeling or association, for a unit of analysis, such as the query text.
    """
    
    magnitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('magnitude') }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    
