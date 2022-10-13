from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class LoggingVariantConfigVariantEnum(str, Enum):
    VARIANT_UNSPECIFIED = "VARIANT_UNSPECIFIED"
    DEFAULT = "DEFAULT"
    MAX_THROUGHPUT = "MAX_THROUGHPUT"


@dataclass_json
@dataclass
class LoggingVariantConfig:
    variant: Optional[LoggingVariantConfigVariantEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variant' }})
    
