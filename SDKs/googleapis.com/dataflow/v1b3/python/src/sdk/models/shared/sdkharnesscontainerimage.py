from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SDKHarnessContainerImage:
    r"""SDKHarnessContainerImage
    Defines an SDK harness container for executing Dataflow pipelines.
    """
    
    capabilities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capabilities') }})
    container_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerImage') }})
    environment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentId') }})
    use_single_core_per_container: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useSingleCorePerContainer') }})
    
