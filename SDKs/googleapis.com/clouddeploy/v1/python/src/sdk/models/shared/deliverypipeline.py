from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pipelinecondition
from . import serialpipeline


@dataclass_json
@dataclass
class DeliveryPipeline:
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    condition: Optional[pipelinecondition.PipelineCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    serial_pipeline: Optional[serialpipeline.SerialPipeline] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serialPipeline' }})
    suspended: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suspended' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
