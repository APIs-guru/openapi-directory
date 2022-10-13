from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import geolayerdata


@dataclass_json
@dataclass
class GeoAnnotationdata:
    annotation_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationType' }})
    data: Optional[geolayerdata.Geolayerdata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    encoded_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encodedData' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    layer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layerId' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated' }})
    volume_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeId' }})
    
