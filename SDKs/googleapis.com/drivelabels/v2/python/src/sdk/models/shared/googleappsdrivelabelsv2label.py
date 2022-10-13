from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2labelappliedcapabilities
from . import googleappsdrivelabelsv2labelappliedlabelpolicy
from . import googleappsdrivelabelsv2userinfo
from . import googleappsdrivelabelsv2userinfo
from . import googleappsdrivelabelsv2labeldisplayhints
from . import googleappsdrivelabelsv2field
from . import googleappsdrivelabelsv2lifecycle
from . import googleappsdrivelabelsv2lockstatus
from . import googleappsdrivelabelsv2labelproperties
from . import googleappsdrivelabelsv2userinfo
from . import googleappsdrivelabelsv2userinfo
from . import googleappsdrivelabelsv2labelschemacapabilities

class GoogleAppsDriveLabelsV2LabelLabelTypeEnum(str, Enum):
    LABEL_TYPE_UNSPECIFIED = "LABEL_TYPE_UNSPECIFIED"
    SHARED = "SHARED"
    ADMIN = "ADMIN"


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2Label:
    applied_capabilities: Optional[googleappsdrivelabelsv2labelappliedcapabilities.GoogleAppsDriveLabelsV2LabelAppliedCapabilities] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appliedCapabilities' }})
    applied_label_policy: Optional[googleappsdrivelabelsv2labelappliedlabelpolicy.GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appliedLabelPolicy' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    creator: Optional[googleappsdrivelabelsv2userinfo.GoogleAppsDriveLabelsV2UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creator' }})
    disable_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableTime' }})
    disabler: Optional[googleappsdrivelabelsv2userinfo.GoogleAppsDriveLabelsV2UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabler' }})
    display_hints: Optional[googleappsdrivelabelsv2labeldisplayhints.GoogleAppsDriveLabelsV2LabelDisplayHints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayHints' }})
    fields: Optional[List[googleappsdrivelabelsv2field.GoogleAppsDriveLabelsV2Field]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label_type: Optional[GoogleAppsDriveLabelsV2LabelLabelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelType' }})
    learn_more_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'learnMoreUri' }})
    lifecycle: Optional[googleappsdrivelabelsv2lifecycle.GoogleAppsDriveLabelsV2Lifecycle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifecycle' }})
    lock_status: Optional[googleappsdrivelabelsv2lockstatus.GoogleAppsDriveLabelsV2LockStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lockStatus' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    properties: Optional[googleappsdrivelabelsv2labelproperties.GoogleAppsDriveLabelsV2LabelProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    publish_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishTime' }})
    publisher: Optional[googleappsdrivelabelsv2userinfo.GoogleAppsDriveLabelsV2UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisher' }})
    revision_create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionCreateTime' }})
    revision_creator: Optional[googleappsdrivelabelsv2userinfo.GoogleAppsDriveLabelsV2UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionCreator' }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    schema_capabilities: Optional[googleappsdrivelabelsv2labelschemacapabilities.GoogleAppsDriveLabelsV2LabelSchemaCapabilities] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaCapabilities' }})
    
