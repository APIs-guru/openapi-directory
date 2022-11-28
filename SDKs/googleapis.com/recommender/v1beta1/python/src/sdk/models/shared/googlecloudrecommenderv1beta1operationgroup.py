from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRecommenderV1beta1OperationGroup:
    r"""GoogleCloudRecommenderV1beta1OperationGroup
    Group of operations that need to be performed atomically.
    """
    
    operations: Optional[List[GoogleCloudRecommenderV1beta1Operation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operations') }})
    
