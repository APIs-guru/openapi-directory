from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudMlV1Model:
    r"""GoogleCloudMlV1Model
    Represents a machine learning solution. A model can have multiple versions, each of which is a deployed, trained model ready to receive prediction requests. The model itself is just a container.
    """
    
    default_version: Optional[GoogleCloudMlV1Version] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultVersion') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    online_prediction_console_logging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onlinePredictionConsoleLogging') }})
    online_prediction_logging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onlinePredictionLogging') }})
    regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions') }})
    

@dataclass_json
@dataclass
class GoogleCloudMlV1ModelInput:
    r"""GoogleCloudMlV1ModelInput
    Represents a machine learning solution. A model can have multiple versions, each of which is a deployed, trained model ready to receive prediction requests. The model itself is just a container.
    """
    
    default_version: Optional[GoogleCloudMlV1VersionInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultVersion') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    online_prediction_console_logging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onlinePredictionConsoleLogging') }})
    online_prediction_logging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onlinePredictionLogging') }})
    regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions') }})
    
