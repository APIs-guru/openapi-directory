from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudmlv1__version


@dataclass_json
@dataclass
class GoogleCloudMlV1Model:
    default_version: Optional[googlecloudmlv1__version.GoogleCloudMlV1Version] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultVersion' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    online_prediction_console_logging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onlinePredictionConsoleLogging' }})
    online_prediction_logging: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onlinePredictionLogging' }})
    regions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regions' }})
    
