from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudMlV1RouteMap:
    r"""GoogleCloudMlV1RouteMap
    Specifies HTTP paths served by a custom container. AI Platform Prediction sends requests to these paths on the container; the custom container must run an HTTP server that responds to these requests with appropriate responses. Read [Custom container requirements](/ai-platform/prediction/docs/custom-container-requirements) for details on how to create your container image to meet these requirements.
    """
    
    health: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health') }})
    predict: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predict') }})
    
