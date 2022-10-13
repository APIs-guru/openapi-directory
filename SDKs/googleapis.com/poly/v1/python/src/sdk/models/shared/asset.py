from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import format
from . import presentationparams
from . import remixinfo
from . import file

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
    author_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorName' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    formats: Optional[List[format.Format]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formats' }})
    is_curated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isCurated' }})
    license: Optional[AssetLicenseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license' }})
    metadata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    presentation_params: Optional[presentationparams.PresentationParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'presentationParams' }})
    remix_info: Optional[remixinfo.RemixInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remixInfo' }})
    thumbnail: Optional[file.File] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnail' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    visibility: Optional[AssetVisibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibility' }})
    
