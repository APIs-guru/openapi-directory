from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PythonPackage:
    r"""PythonPackage
    Python package to upload to Artifact Registry upon successful completion of all build steps. A package can encapsulate multiple objects to be uploaded to a single repository.
    """
    
    paths: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paths') }})
    repository: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    
