from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import imageoption
from . import libraryoptioninfodto
from . import libraryoptioninfodto
from . import imagetype_enum


@dataclass_json
@dataclass
class LibraryTypeOptionsDto:
    default_image_options: Optional[List[imageoption.ImageOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DefaultImageOptions' }})
    image_fetchers: Optional[List[libraryoptioninfodto.LibraryOptionInfoDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageFetchers' }})
    metadata_fetchers: Optional[List[libraryoptioninfodto.LibraryOptionInfoDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetadataFetchers' }})
    supported_image_types: Optional[List[imagetype_enum.ImageTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportedImageTypes' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
