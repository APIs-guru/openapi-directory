from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AssetLicenseEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    CREATIVE_COMMONS_BY = "CREATIVE_COMMONS_BY"
    ALL_RIGHTS_RESERVED = "ALL_RIGHTS_RESERVED"

class AssetVisibilityEnum(str, Enum):
    VISIBILITY_UNSPECIFIED = "VISIBILITY_UNSPECIFIED"
    PRIVATE = "PRIVATE"
    UNLISTED = "UNLISTED"
    PUBLIC = "PUBLIC"


@dataclass_json
@dataclass
class Asset:
    r"""Asset
    Represents and describes an asset in the Poly library. An asset is a 3D model or scene created using [Tilt Brush](//www.tiltbrush.com), [Blocks](//vr.google.com/blocks/), or any 3D program that produces a file that can be upload to Poly.
    """
    
    author_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorName') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    formats: Optional[List[Format]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formats') }})
    is_curated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isCurated') }})
    license: Optional[AssetLicenseEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license') }})
    metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    presentation_params: Optional[PresentationParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('presentationParams') }})
    remix_info: Optional[RemixInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remixInfo') }})
    thumbnail: Optional[File] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnail') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    visibility: Optional[AssetVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibility') }})
    
