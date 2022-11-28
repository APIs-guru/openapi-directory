from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues:
    r"""GoogleCloudOrgpolicyV2PolicySpecPolicyRuleStringValues
    A message that holds specific allowed and denied values. This message can define specific values and subtrees of Cloud Resource Manager resource hierarchy (`Organizations`, `Folders`, `Projects`) that are allowed or denied. This is achieved by using the `under:` and optional `is:` prefixes. The `under:` prefix is used to denote resource subtree values. The `is:` prefix is used to denote specific values, and is required only if the value contains a \":\". Values prefixed with \"is:\" are treated the same as values with no prefix. Ancestry subtrees must be in one of the following formats: - \"projects/\", e.g. \"projects/tokyo-rain-123\" - \"folders/\", e.g. \"folders/1234\" - \"organizations/\", e.g. \"organizations/1234\" The `supports_under` field of the associated `Constraint` defines whether ancestry prefixes can be used.
    """
    
    allowed_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedValues') }})
    denied_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deniedValues') }})
    
