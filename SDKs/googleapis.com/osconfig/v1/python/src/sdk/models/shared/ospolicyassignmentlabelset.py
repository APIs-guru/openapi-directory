from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OsPolicyAssignmentLabelSet:
    r"""OsPolicyAssignmentLabelSet
    Message representing label set. * A label is a key value pair set for a VM. * A LabelSet is a set of labels. * Labels within a LabelSet are ANDed. In other words, a LabelSet is applicable for a VM only if it matches all the labels in the LabelSet. * Example: A LabelSet with 2 labels: `env=prod` and `type=webserver` will only be applicable for those VMs with both labels present.
    """
    
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    
