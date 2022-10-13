from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleappscardv1borderstyle
from . import googleappscardv1imagecropstyle


@dataclass_json
@dataclass
class GoogleAppsCardV1ImageComponent:
    alt_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'altText' }})
    border_style: Optional[googleappscardv1borderstyle.GoogleAppsCardV1BorderStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'borderStyle' }})
    crop_style: Optional[googleappscardv1imagecropstyle.GoogleAppsCardV1ImageCropStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cropStyle' }})
    image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageUri' }})
    
