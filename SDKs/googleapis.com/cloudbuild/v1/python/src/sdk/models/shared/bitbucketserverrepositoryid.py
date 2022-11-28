from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BitbucketServerRepositoryIDInput:
    r"""BitbucketServerRepositoryIDInput
    BitbucketServerRepositoryId identifies a specific repository hosted on a Bitbucket Server.
    """
    
    project_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectKey') }})
    repo_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repoSlug') }})
    

@dataclass_json
@dataclass
class BitbucketServerRepositoryID:
    r"""BitbucketServerRepositoryID
    BitbucketServerRepositoryId identifies a specific repository hosted on a Bitbucket Server.
    """
    
    project_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectKey') }})
    repo_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repoSlug') }})
    webhook_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookId') }})
    
