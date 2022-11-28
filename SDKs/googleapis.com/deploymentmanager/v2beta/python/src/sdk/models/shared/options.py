from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Options:
    r"""Options
    Options allows customized resource handling by Deployment Manager.
    """
    
    async_options: Optional[List[AsyncOptions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asyncOptions') }})
    input_mappings: Optional[List[InputMapping]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputMappings') }})
    validation_options: Optional[ValidationOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationOptions') }})
    virtual_properties: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualProperties') }})
    
