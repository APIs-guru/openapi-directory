from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NodePoolLoggingConfig:
    r"""NodePoolLoggingConfig
    NodePoolLoggingConfig specifies logging configuration for nodepools.
    """
    
    variant_config: Optional[LoggingVariantConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variantConfig') }})
    
