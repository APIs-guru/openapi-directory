from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import alertstrategy
from . import condition
from . import mutationrecord
from . import documentation
from . import mutationrecord
from . import status

class AlertPolicyCombinerEnum(str, Enum):
    COMBINE_UNSPECIFIED = "COMBINE_UNSPECIFIED"
    AND = "AND"
    OR = "OR"
    AND_WITH_MATCHING_RESOURCE = "AND_WITH_MATCHING_RESOURCE"


@dataclass_json
@dataclass
class AlertPolicy:
    alert_strategy: Optional[alertstrategy.AlertStrategy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alertStrategy' }})
    combiner: Optional[AlertPolicyCombinerEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'combiner' }})
    conditions: Optional[List[condition.Condition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditions' }})
    creation_record: Optional[mutationrecord.MutationRecord] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationRecord' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    documentation: Optional[documentation.Documentation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    mutation_record: Optional[mutationrecord.MutationRecord] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mutationRecord' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notification_channels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationChannels' }})
    user_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userLabels' }})
    validity: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validity' }})
    
