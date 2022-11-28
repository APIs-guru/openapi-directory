from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LoggingVariantConfigVariantEnum(str, Enum):
    VARIANT_UNSPECIFIED = "VARIANT_UNSPECIFIED"
    DEFAULT = "DEFAULT"
    MAX_THROUGHPUT = "MAX_THROUGHPUT"


@dataclass_json
@dataclass
class LoggingVariantConfig:
    r"""LoggingVariantConfig
    LoggingVariantConfig specifies the behaviour of the logging component.
    """
    
    variant: Optional[LoggingVariantConfigVariantEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variant') }})
    
