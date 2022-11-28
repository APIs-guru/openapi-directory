from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAppsCardV1TextParagraph:
    r"""GoogleAppsCardV1TextParagraph
    A paragraph of text that supports formatting. See [Text formatting](https://developers.google.com/workspace/add-ons/concepts/widgets#text_formatting) for details.
    """
    
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
