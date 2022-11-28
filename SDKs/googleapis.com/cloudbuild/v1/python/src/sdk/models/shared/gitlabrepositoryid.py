from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GitLabRepositoryID:
    r"""GitLabRepositoryID
    GitLabRepositoryId identifies a specific repository hosted on GitLab.com or GitLabEnterprise
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    webhook_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookId') }})
    

@dataclass_json
@dataclass
class GitLabRepositoryIDInput:
    r"""GitLabRepositoryIDInput
    GitLabRepositoryId identifies a specific repository hosted on GitLab.com or GitLabEnterprise
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
