from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class FcmOptions:
    r"""FcmOptions
    Platform independent options for features provided by the FCM SDKs.
    """
    
    analytics_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyticsLabel') }})
    
