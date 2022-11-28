from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountImageImprovements:
    r"""AccountImageImprovements
    This improvement will attempt to automatically correct submitted images if they don't meet the [image requirements](https://support.google.com/merchants/answer/6324350), for example, removing overlays. If successful, the image will be replaced and approved. This improvement is only applied to images of disapproved offers. For more information see: [Automatic image improvements](https://support.google.com/merchants/answer/9242973)
    """
    
    account_image_improvements_settings: Optional[AccountImageImprovementsSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountImageImprovementsSettings') }})
    effective_allow_automatic_image_improvements: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveAllowAutomaticImageImprovements') }})
    

@dataclass_json
@dataclass
class AccountImageImprovementsInput:
    r"""AccountImageImprovementsInput
    This improvement will attempt to automatically correct submitted images if they don't meet the [image requirements](https://support.google.com/merchants/answer/6324350), for example, removing overlays. If successful, the image will be replaced and approved. This improvement is only applied to images of disapproved offers. For more information see: [Automatic image improvements](https://support.google.com/merchants/answer/9242973)
    """
    
    account_image_improvements_settings: Optional[AccountImageImprovementsSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountImageImprovementsSettings') }})
    
