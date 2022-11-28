from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo:
    r"""GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo
    ProfileInfo defines the profile information for each schema field type.
    """
    
    distinct_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distinctRatio') }})
    double_profile: Optional[GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleProfile') }})
    integer_profile: Optional[GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integerProfile') }})
    null_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nullRatio') }})
    string_profile: Optional[GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringProfile') }})
    top_n_values: Optional[List[GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topNValues') }})
    
