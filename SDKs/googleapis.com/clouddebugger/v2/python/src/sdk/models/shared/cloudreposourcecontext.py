from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CloudRepoSourceContext:
    r"""CloudRepoSourceContext
    A CloudRepoSourceContext denotes a particular revision in a cloud repo (a repo hosted by the Google Cloud Platform).
    """
    
    alias_context: Optional[AliasContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aliasContext') }})
    alias_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aliasName') }})
    repo_id: Optional[RepoID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repoId') }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    
