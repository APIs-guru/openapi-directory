from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Link:
    r"""Link
    This corresponds to an in-toto link.
    """
    
    byproducts: Optional[ByProducts] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('byproducts') }})
    command: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('command') }})
    environment: Optional[Environment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    materials: Optional[List[GrafeasV1beta1IntotoArtifact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('materials') }})
    products: Optional[List[GrafeasV1beta1IntotoArtifact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    
