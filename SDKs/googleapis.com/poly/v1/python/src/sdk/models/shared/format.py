from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Format:
    r"""Format
    The same asset can be represented in different formats, for example, a [WaveFront .obj](//en.wikipedia.org/wiki/Wavefront_.obj_file) file with its corresponding .mtl file or a [Khronos glTF](//www.khronos.org/gltf) file with its corresponding .glb binary data. A format refers to a specific representation of an asset and contains all information needed to retrieve and describe this representation.
    """
    
    format_complexity: Optional[FormatComplexity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formatComplexity') }})
    format_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formatType') }})
    resources: Optional[List[File]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resources') }})
    root: Optional[File] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('root') }})
    
