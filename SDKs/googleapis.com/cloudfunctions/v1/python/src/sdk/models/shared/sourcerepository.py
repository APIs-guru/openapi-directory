from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SourceRepository:
    r"""SourceRepository
    Describes SourceRepository, used to represent parameters related to source repository where a function is hosted.
    """
    
    deployed_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deployedUrl') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class SourceRepositoryInput:
    r"""SourceRepositoryInput
    Describes SourceRepository, used to represent parameters related to source repository where a function is hosted.
    """
    
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
