from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import loggingvariantconfig


@dataclass_json
@dataclass
class NodePoolLoggingConfig:
    variant_config: Optional[loggingvariantconfig.LoggingVariantConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variantConfig' }})
    
