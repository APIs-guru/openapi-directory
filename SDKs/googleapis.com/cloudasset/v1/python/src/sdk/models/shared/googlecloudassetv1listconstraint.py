from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudAssetV1ListConstraint:
    r"""GoogleCloudAssetV1ListConstraint
    A `Constraint` that allows or disallows a list of string values, which are configured by an Organization's policy administrator with a `Policy`.
    """
    
    supports_in: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportsIn') }})
    supports_under: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportsUnder') }})
    
