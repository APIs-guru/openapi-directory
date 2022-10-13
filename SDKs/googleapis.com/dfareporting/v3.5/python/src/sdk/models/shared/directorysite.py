from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import dimensionvalue
from . import directorysitesettings

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
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idDimensionValue' }})
    inpage_tag_formats: Optional[List[DirectorySiteInpageTagFormatsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inpageTagFormats' }})
    interstitial_tag_formats: Optional[List[DirectorySiteInterstitialTagFormatsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interstitialTagFormats' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    settings: Optional[directorysitesettings.DirectorySiteSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
