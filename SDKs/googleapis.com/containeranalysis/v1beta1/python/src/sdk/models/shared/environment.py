from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Environment:
    r"""Environment
    Defines an object for the environment field in in-toto links. The suggested fields are \"variables\", \"filesystem\", and \"workdir\".
    """
    
    custom_values: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customValues') }})
    
