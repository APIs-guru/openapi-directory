from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import libraryoptions


@dataclass_json
@dataclass
class UpdateLibraryOptionsDto:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    library_options: Optional[libraryoptions.LibraryOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LibraryOptions' }})
    
