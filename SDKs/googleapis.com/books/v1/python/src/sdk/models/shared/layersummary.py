from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Layersummary:
    annotation_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationCount' }})
    annotation_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationTypes' }})
    annotations_data_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationsDataLink' }})
    annotations_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotationsLink' }})
    content_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentVersion' }})
    data_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataCount' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    layer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layerId' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated' }})
    volume_annotations_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeAnnotationsVersion' }})
    volume_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volumeId' }})
    
