from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SourceMetadata:
    r"""SourceMetadata
    Metadata about a Source useful for automatically optimizing and tuning the pipeline, etc.
    """
    
    estimated_size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedSizeBytes') }})
    infinite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infinite') }})
    produces_sorted_keys: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('producesSortedKeys') }})
    
