from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TemplateParameter:
    r"""TemplateParameter
    A configurable parameter that replaces one or more fields in the template. Parameterizable fields: - Labels - File uris - Job properties - Job arguments - Script variables - Main class (in HadoopJob and SparkJob) - Zone (in ClusterSelector)
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    fields: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    validation: Optional[ParameterValidation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validation') }})
    
