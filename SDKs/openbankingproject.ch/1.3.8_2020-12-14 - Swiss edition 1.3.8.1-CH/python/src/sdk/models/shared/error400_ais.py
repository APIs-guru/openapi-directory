from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Error400AisAdditionalErrors:
    r"""Error400AisAdditionalErrors
    This is a data element to support the declaration of additional errors in the context of [RFC7807].
    """
    
    code: MessageCode400AisEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclass
class Error400Ais:
    r"""Error400Ais
    Standardised definition of reporting error information according to [RFC7807]
    in case of a HTTP error code 400 for AIS.
    
    """
    
    code: MessageCode400AisEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    links: Optional[dict[str, HrefType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    additional_errors: Optional[List[Error400AisAdditionalErrors]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalErrors') }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
