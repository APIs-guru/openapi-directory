from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AndroidMatrix:
    r"""AndroidMatrix
    A set of Android device configuration permutations is defined by the the cross-product of the given axes. Internally, the given AndroidMatrix will be expanded into a set of AndroidDevices. Only supported permutations will be instantiated. Invalid permutations (e.g., incompatible models/versions) are ignored.
    """
    
    android_model_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidModelIds') }})
    android_version_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidVersionIds') }})
    locales: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locales') }})
    orientations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orientations') }})
    
