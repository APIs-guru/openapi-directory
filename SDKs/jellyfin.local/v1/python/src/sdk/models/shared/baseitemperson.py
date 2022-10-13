from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BaseItemPersonImageBlurHashes:
    art: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Art' }})
    backdrop: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Backdrop' }})
    banner: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Banner' }})
    box: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Box' }})
    box_rear: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BoxRear' }})
    chapter: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Chapter' }})
    disc: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Disc' }})
    logo: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Logo' }})
    menu: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Menu' }})
    primary: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Primary' }})
    profile: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Profile' }})
    screenshot: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Screenshot' }})
    thumb: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Thumb' }})
    

@dataclass_json
@dataclass
class BaseItemPerson:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    image_blur_hashes: Optional[BaseItemPersonImageBlurHashes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageBlurHashes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    primary_image_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrimaryImageTag' }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Role' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
