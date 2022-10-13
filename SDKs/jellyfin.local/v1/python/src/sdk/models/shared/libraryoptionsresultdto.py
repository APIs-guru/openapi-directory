from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import libraryoptioninfodto
from . import libraryoptioninfodto
from . import libraryoptioninfodto
from . import librarytypeoptionsdto


@dataclass_json
@dataclass
class LibraryOptionsResultDto:
    metadata_readers: Optional[List[libraryoptioninfodto.LibraryOptionInfoDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetadataReaders' }})
    metadata_savers: Optional[List[libraryoptioninfodto.LibraryOptionInfoDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetadataSavers' }})
    subtitle_fetchers: Optional[List[libraryoptioninfodto.LibraryOptionInfoDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubtitleFetchers' }})
    type_options: Optional[List[librarytypeoptionsdto.LibraryTypeOptionsDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TypeOptions' }})
    
