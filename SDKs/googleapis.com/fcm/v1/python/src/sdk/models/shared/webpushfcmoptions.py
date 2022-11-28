from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WebpushFcmOptions:
    r"""WebpushFcmOptions
    Options for features provided by the FCM SDK for Web.
    """
    
    analytics_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyticsLabel') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    
