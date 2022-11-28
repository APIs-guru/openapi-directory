from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LibraryOptionsResultDto:
    r"""LibraryOptionsResultDto
    Library options result dto.
    """
    
    metadata_readers: Optional[List[LibraryOptionInfoDto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetadataReaders') }})
    metadata_savers: Optional[List[LibraryOptionInfoDto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetadataSavers') }})
    subtitle_fetchers: Optional[List[LibraryOptionInfoDto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubtitleFetchers') }})
    type_options: Optional[List[LibraryTypeOptionsDto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TypeOptions') }})
    
