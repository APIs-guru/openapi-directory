from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleDevtoolsContaineranalysisV1alpha1SourceContext:
    r"""GoogleDevtoolsContaineranalysisV1alpha1SourceContext
    A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory.
    """
    
    cloud_repo: Optional[GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudRepo') }})
    gerrit: Optional[GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gerrit') }})
    git: Optional[GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('git') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    
