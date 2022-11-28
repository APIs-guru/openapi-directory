from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnum(str, Enum):
    TARGET_RESOURCE_UNSPECIFIED = "TARGET_RESOURCE_UNSPECIFIED"
    ORG_UNIT = "ORG_UNIT"
    GROUP = "GROUP"


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1PolicySchema:
    r"""GoogleChromePolicyVersionsV1PolicySchema
    Resource representing a policy schema.
    """
    
    access_restrictions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessRestrictions') }})
    additional_target_key_names: Optional[List[GoogleChromePolicyVersionsV1AdditionalTargetKeyName]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalTargetKeyNames') }})
    category_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryTitle') }})
    definition: Optional[Proto2FileDescriptorProto] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    field_descriptions: Optional[List[GoogleChromePolicyVersionsV1PolicySchemaFieldDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldDescriptions') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notices: Optional[List[GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notices') }})
    policy_api_lifecycle: Optional[ChromeCrosDpanelAutosettingsProtoPolicyAPILifecycle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyApiLifecycle') }})
    policy_api_lifeycle: Optional[ChromeCrosDpanelAutosettingsProtoPolicyAPILifecycle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyApiLifeycle') }})
    policy_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyDescription') }})
    schema_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaName') }})
    support_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportUri') }})
    valid_target_resources: Optional[List[GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validTargetResources') }})
    
