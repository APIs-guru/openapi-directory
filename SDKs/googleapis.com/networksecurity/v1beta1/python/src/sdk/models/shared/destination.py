from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Destination:
    r"""Destination
    Specification of traffic destination attributes.
    """
    
    hosts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hosts') }})
    http_header_match: Optional[HTTPHeaderMatch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpHeaderMatch') }})
    methods: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('methods') }})
    ports: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ports') }})
    
