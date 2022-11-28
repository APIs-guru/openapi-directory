from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ApnsFcmOptions:
    r"""ApnsFcmOptions
    Options for features provided by the FCM SDK for iOS.
    """
    
    analytics_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyticsLabel') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    
