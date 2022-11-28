from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AnnotateFileRequest:
    r"""AnnotateFileRequest
    A request to annotate one single file, e.g. a PDF, TIFF or GIF file.
    """
    
    features: Optional[List[Feature]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    image_context: Optional[ImageContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageContext') }})
    input_config: Optional[InputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputConfig') }})
    pages: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    
