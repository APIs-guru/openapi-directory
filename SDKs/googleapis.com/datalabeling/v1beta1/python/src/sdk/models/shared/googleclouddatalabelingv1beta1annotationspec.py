from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1AnnotationSpec:
    r"""GoogleCloudDatalabelingV1beta1AnnotationSpec
    Container of information related to one possible annotation that can be used in a labeling task. For example, an image classification task where images are labeled as `dog` or `cat` must reference an AnnotationSpec for `dog` and an AnnotationSpec for `cat`.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    
