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
class DictionaryAnnotationdata:
    annotation_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationType') }})
    data: Optional[Dictlayerdata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    encoded_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encodedData') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    layer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layerId') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    volume_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeId') }})
    
