from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AlertPolicyCombinerEnum(str, Enum):
    COMBINE_UNSPECIFIED = "COMBINE_UNSPECIFIED"
    AND = "AND"
    OR = "OR"
    AND_WITH_MATCHING_RESOURCE = "AND_WITH_MATCHING_RESOURCE"


@dataclass_json
@dataclass
class AlertPolicy:
    r"""AlertPolicy
    A description of the conditions under which some aspect of your system is considered to be \"unhealthy\" and the ways to notify people or services about this state. For an overview of alert policies, see Introduction to Alerting (https://cloud.google.com/monitoring/alerts/).
    """
    
    alert_strategy: Optional[AlertStrategy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertStrategy') }})
    combiner: Optional[AlertPolicyCombinerEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('combiner') }})
    conditions: Optional[List[Condition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    creation_record: Optional[MutationRecord] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationRecord') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    documentation: Optional[Documentation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    mutation_record: Optional[MutationRecord] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mutationRecord') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notification_channels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationChannels') }})
    user_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLabels') }})
    validity: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validity') }})
    
