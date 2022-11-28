from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StartupConfigurationDto:
    r"""StartupConfigurationDto
    The startup configuration DTO.
    """
    
    metadata_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetadataCountryCode') }})
    preferred_metadata_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreferredMetadataLanguage') }})
    ui_culture: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UICulture') }})
    
