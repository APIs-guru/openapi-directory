from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import crophintsparams
from . import latlongrect
from . import productsearchparams
from . import textdetectionparams
from . import webdetectionparams


@dataclass_json
@dataclass
class ImageContext:
    crop_hints_params: Optional[crophintsparams.CropHintsParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cropHintsParams' }})
    language_hints: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageHints' }})
    lat_long_rect: Optional[latlongrect.LatLongRect] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latLongRect' }})
    product_search_params: Optional[productsearchparams.ProductSearchParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productSearchParams' }})
    text_detection_params: Optional[textdetectionparams.TextDetectionParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textDetectionParams' }})
    web_detection_params: Optional[webdetectionparams.WebDetectionParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webDetectionParams' }})
    
