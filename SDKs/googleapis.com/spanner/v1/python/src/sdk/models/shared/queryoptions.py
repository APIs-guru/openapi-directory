from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class QueryOptions:
    r"""QueryOptions
    Query optimizer configuration.
    """
    
    optimizer_statistics_package: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optimizerStatisticsPackage') }})
    optimizer_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optimizerVersion') }})
    
