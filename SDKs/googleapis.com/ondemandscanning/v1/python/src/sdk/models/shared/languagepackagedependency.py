from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LanguagePackageDependency:
    r"""LanguagePackageDependency
    Indicates a language package available between this package and the customer's resource artifact.
    """
    
    package: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('package') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
