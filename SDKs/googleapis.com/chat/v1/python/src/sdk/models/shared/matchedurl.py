from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MatchedURL:
    r"""MatchedURL
    A matched url in a Chat message. Chat apps can preview matched URLs. For more information, refer to [Preview links](https://developers.google.com/chat/how-tos/preview-links).
    """
    
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
