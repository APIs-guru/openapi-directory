from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Error404SbsAdditionalErrors:
    r"""Error404SbsAdditionalErrors
    This is a data element to support the declaration of additional errors in the context of [RFC7807].
    """
    
    code: MessageCode404SbsEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclass
class Error404Sbs:
    r"""Error404Sbs
    Standardised definition of reporting error information according to [RFC7807]
    in case of a HTTP error code 404 for signing baskets.
    
    """
    
    code: MessageCode404SbsEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    links: Optional[dict[str, HrefType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    additional_errors: Optional[List[Error404SbsAdditionalErrors]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalErrors') }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
