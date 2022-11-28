from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DirectorySiteInpageTagFormatsEnum(str, Enum):
    STANDARD = "STANDARD"
    IFRAME_JAVASCRIPT_INPAGE = "IFRAME_JAVASCRIPT_INPAGE"
    INTERNAL_REDIRECT_INPAGE = "INTERNAL_REDIRECT_INPAGE"
    JAVASCRIPT_INPAGE = "JAVASCRIPT_INPAGE"

class DirectorySiteInterstitialTagFormatsEnum(str, Enum):
    IFRAME_JAVASCRIPT_INTERSTITIAL = "IFRAME_JAVASCRIPT_INTERSTITIAL"
    INTERNAL_REDIRECT_INTERSTITIAL = "INTERNAL_REDIRECT_INTERSTITIAL"
    JAVASCRIPT_INTERSTITIAL = "JAVASCRIPT_INTERSTITIAL"


@dataclass_json
@dataclass
class DirectorySite:
    r"""DirectorySite
    DirectorySites contains properties of a website from the Site Directory. Sites need to be added to an account via the Sites resource before they can be assigned to a placement.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    id_dimension_value: Optional[DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idDimensionValue') }})
    inpage_tag_formats: Optional[List[DirectorySiteInpageTagFormatsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inpageTagFormats') }})
    interstitial_tag_formats: Optional[List[DirectorySiteInterstitialTagFormatsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interstitialTagFormats') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    settings: Optional[DirectorySiteSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
