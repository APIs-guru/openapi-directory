from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StartupConfigurationDto:
    metadata_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetadataCountryCode' }})
    preferred_metadata_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreferredMetadataLanguage' }})
    ui_culture: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UICulture' }})
    
