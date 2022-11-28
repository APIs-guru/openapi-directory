from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext:
    r"""GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext
    A SourceContext referring to a Gerrit project.
    """
    
    alias_context: Optional[GoogleDevtoolsContaineranalysisV1alpha1AliasContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aliasContext') }})
    gerrit_project: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gerritProject') }})
    host_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostUri') }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    
