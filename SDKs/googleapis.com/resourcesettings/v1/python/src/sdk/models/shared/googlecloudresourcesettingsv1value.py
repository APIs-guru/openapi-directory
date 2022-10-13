from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudresourcesettingsv1valueenumvalue
from . import googlecloudresourcesettingsv1valuestringmap
from . import googlecloudresourcesettingsv1valuestringset


@dataclass_json
@dataclass
class GoogleCloudResourcesettingsV1Value:
    boolean_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booleanValue' }})
    duration_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationValue' }})
    enum_value: Optional[googlecloudresourcesettingsv1valueenumvalue.GoogleCloudResourcesettingsV1ValueEnumValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enumValue' }})
    string_map_value: Optional[googlecloudresourcesettingsv1valuestringmap.GoogleCloudResourcesettingsV1ValueStringMap] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringMapValue' }})
    string_set_value: Optional[googlecloudresourcesettingsv1valuestringset.GoogleCloudResourcesettingsV1ValueStringSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringSetValue' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValue' }})
    
