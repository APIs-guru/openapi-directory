from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1PhraseMatchData:
    r"""GoogleCloudContactcenterinsightsV1PhraseMatchData
    The data for a matched phrase matcher. Represents information identifying a phrase matcher for a given match.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    phrase_matcher: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phraseMatcher') }})
    
