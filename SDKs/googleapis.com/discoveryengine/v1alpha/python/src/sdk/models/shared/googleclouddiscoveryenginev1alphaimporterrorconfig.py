from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDiscoveryengineV1alphaImportErrorConfig:
    r"""GoogleCloudDiscoveryengineV1alphaImportErrorConfig
    Configuration of destination for Import related errors.
    """
    
    gcs_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsPrefix') }})
    
