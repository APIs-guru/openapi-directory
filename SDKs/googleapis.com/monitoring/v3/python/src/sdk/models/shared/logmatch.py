from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LogMatch:
    r"""LogMatch
    A condition type that checks whether a log message in the scoping project (https://cloud.google.com/monitoring/api/v3#project_name) satisfies the given filter. Logs from other projects in the metrics scope are not evaluated.
    """
    
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    label_extractors: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelExtractors') }})
    
