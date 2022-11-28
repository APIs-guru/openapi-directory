from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RevisionSpec:
    r"""RevisionSpec
    RevisionSpec holds the desired state of the Revision (from the client).
    """
    
    container_concurrency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerConcurrency') }})
    containers: Optional[List[Container]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containers') }})
    enable_service_links: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableServiceLinks') }})
    image_pull_secrets: Optional[List[LocalObjectReference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imagePullSecrets') }})
    service_account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountName') }})
    timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutSeconds') }})
    volumes: Optional[List[Volume]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumes') }})
    
