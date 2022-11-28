from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1DataItem:
    r"""GoogleCloudDatalabelingV1beta1DataItem
    DataItem is a piece of data, without annotation. For example, an image.
    """
    
    image_payload: Optional[GoogleCloudDatalabelingV1beta1ImagePayload] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imagePayload') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    text_payload: Optional[GoogleCloudDatalabelingV1beta1TextPayload] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textPayload') }})
    video_payload: Optional[GoogleCloudDatalabelingV1beta1VideoPayload] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoPayload') }})
    
