from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SocialMetaTagInfo:
    r"""SocialMetaTagInfo
    Parameters for social meta tag params. Used to set meta tag data for link previews on social sites.
    """
    
    social_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('socialDescription') }})
    social_image_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('socialImageLink') }})
    social_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('socialTitle') }})
    
