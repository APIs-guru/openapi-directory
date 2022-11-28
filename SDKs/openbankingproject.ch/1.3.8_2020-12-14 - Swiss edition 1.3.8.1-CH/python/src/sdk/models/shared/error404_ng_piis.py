from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Error404NgPiis:
    r"""Error404NgPiis
    NextGen specific definition of reporting error information in case of a HTTP error code 404.
    
    """
    
    links: Optional[dict[str, HrefType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    tpp_messages: Optional[List[TppMessage404Piis]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tppMessages') }})
    
