from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlechromepolicyversionsv1additionaltargetkeyname
from . import proto2filedescriptorproto
from . import googlechromepolicyversionsv1policyschemafielddescription
from . import googlechromepolicyversionsv1policyschemanoticedescription
from . import chromecrosdpanelautosettingsprotopolicyapilifecycle
from . import chromecrosdpanelautosettingsprotopolicyapilifecycle

class GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnum(str, Enum):
    TARGET_RESOURCE_UNSPECIFIED = "TARGET_RESOURCE_UNSPECIFIED"
    ORG_UNIT = "ORG_UNIT"
    GROUP = "GROUP"


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1PolicySchema:
    access_restrictions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessRestrictions' }})
    additional_target_key_names: Optional[List[googlechromepolicyversionsv1additionaltargetkeyname.GoogleChromePolicyVersionsV1AdditionalTargetKeyName]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalTargetKeyNames' }})
    category_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryTitle' }})
    definition: Optional[proto2filedescriptorproto.Proto2FileDescriptorProto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'definition' }})
    field_descriptions: Optional[List[googlechromepolicyversionsv1policyschemafielddescription.GoogleChromePolicyVersionsV1PolicySchemaFieldDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldDescriptions' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notices: Optional[List[googlechromepolicyversionsv1policyschemanoticedescription.GoogleChromePolicyVersionsV1PolicySchemaNoticeDescription]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notices' }})
    policy_api_lifecycle: Optional[chromecrosdpanelautosettingsprotopolicyapilifecycle.ChromeCrosDpanelAutosettingsProtoPolicyAPILifecycle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyApiLifecycle' }})
    policy_api_lifeycle: Optional[chromecrosdpanelautosettingsprotopolicyapilifecycle.ChromeCrosDpanelAutosettingsProtoPolicyAPILifecycle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyApiLifeycle' }})
    policy_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyDescription' }})
    schema_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaName' }})
    support_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportUri' }})
    valid_target_resources: Optional[List[GoogleChromePolicyVersionsV1PolicySchemaValidTargetResourcesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validTargetResources' }})
    
