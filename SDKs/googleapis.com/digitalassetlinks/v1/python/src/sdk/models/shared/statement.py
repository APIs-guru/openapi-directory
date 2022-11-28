from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Statement:
    r"""Statement
    Describes a reliable statement that has been made about the relationship between a source asset and a target asset. Statements are always made by the source asset, either directly or by delegating to a statement list that is stored elsewhere. For more detailed definitions of statements and assets, please refer to our [API documentation landing page](/digital-asset-links/v1/getting-started).
    """
    
    relation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relation') }})
    source: Optional[Asset] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    target: Optional[Asset] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    
