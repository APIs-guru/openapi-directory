from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LibraryTypeOptionsDto:
    r"""LibraryTypeOptionsDto
    Library type options dto.
    """
    
    default_image_options: Optional[List[ImageOption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultImageOptions') }})
    image_fetchers: Optional[List[LibraryOptionInfoDto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageFetchers') }})
    metadata_fetchers: Optional[List[LibraryOptionInfoDto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetadataFetchers') }})
    supported_image_types: Optional[List[ImageTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportedImageTypes') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
