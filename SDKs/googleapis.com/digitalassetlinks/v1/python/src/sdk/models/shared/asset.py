from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Asset:
    r"""Asset
    Uniquely identifies an asset. A digital asset is an identifiable and addressable online entity that typically provides some service or content. Examples of assets are websites, Android apps, Twitter feeds, and Plus Pages.
    """
    
    android_app: Optional[AndroidAppAsset] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidApp') }})
    web: Optional[WebAsset] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('web') }})
    
