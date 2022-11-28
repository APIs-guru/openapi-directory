from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeliveryPipeline:
    r"""DeliveryPipeline
    A `DeliveryPipeline` resource in the Google Cloud Deploy API. A `DeliveryPipeline` defines a pipeline through which a Skaffold configuration can progress.
    """
    
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    condition: Optional[PipelineCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    serial_pipeline: Optional[SerialPipeline] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serialPipeline') }})
    suspended: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspended') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class DeliveryPipelineInput:
    r"""DeliveryPipelineInput
    A `DeliveryPipeline` resource in the Google Cloud Deploy API. A `DeliveryPipeline` defines a pipeline through which a Skaffold configuration can progress.
    """
    
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    condition: Optional[PipelineCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    serial_pipeline: Optional[SerialPipeline] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serialPipeline') }})
    suspended: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspended') }})
    
