from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UploadSubtitleDto:
    r"""UploadSubtitleDto
    Upload subtitles dto.
    """
    
    data: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    format: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Format') }})
    is_forced: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsForced') }})
    language: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Language') }})
    
