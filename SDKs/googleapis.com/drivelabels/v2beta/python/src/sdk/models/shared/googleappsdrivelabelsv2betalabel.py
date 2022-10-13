from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betalabelappliedcapabilities
from . import googleappsdrivelabelsv2betalabelappliedlabelpolicy
from . import googleappsdrivelabelsv2betauserinfo
from . import googleappsdrivelabelsv2betauserinfo
from . import googleappsdrivelabelsv2betalabeldisplayhints
from . import googleappsdrivelabelsv2betafield
from . import googleappsdrivelabelsv2betalifecycle
from . import googleappsdrivelabelsv2betalockstatus
from . import googleappsdrivelabelsv2betalabelproperties
from . import googleappsdrivelabelsv2betauserinfo
from . import googleappsdrivelabelsv2betauserinfo
from . import googleappsdrivelabelsv2betalabelschemacapabilities

class GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum(str, Enum):
    LABEL_TYPE_UNSPECIFIED = "LABEL_TYPE_UNSPECIFIED"
    SHARED = "SHARED"
    ADMIN = "ADMIN"


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaLabel:
    applied_capabilities: Optional[googleappsdrivelabelsv2betalabelappliedcapabilities.GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appliedCapabilities' }})
    applied_label_policy: Optional[googleappsdrivelabelsv2betalabelappliedlabelpolicy.GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appliedLabelPolicy' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    creator: Optional[googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creator' }})
    disable_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableTime' }})
    disabler: Optional[googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabler' }})
    display_hints: Optional[googleappsdrivelabelsv2betalabeldisplayhints.GoogleAppsDriveLabelsV2betaLabelDisplayHints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayHints' }})
    fields: Optional[List[googleappsdrivelabelsv2betafield.GoogleAppsDriveLabelsV2betaField]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label_type: Optional[GoogleAppsDriveLabelsV2betaLabelLabelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelType' }})
    learn_more_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'learnMoreUri' }})
    lifecycle: Optional[googleappsdrivelabelsv2betalifecycle.GoogleAppsDriveLabelsV2betaLifecycle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifecycle' }})
    lock_status: Optional[googleappsdrivelabelsv2betalockstatus.GoogleAppsDriveLabelsV2betaLockStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lockStatus' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    properties: Optional[googleappsdrivelabelsv2betalabelproperties.GoogleAppsDriveLabelsV2betaLabelProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    publish_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishTime' }})
    publisher: Optional[googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisher' }})
    revision_create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionCreateTime' }})
    revision_creator: Optional[googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionCreator' }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revisionId' }})
    schema_capabilities: Optional[googleappsdrivelabelsv2betalabelschemacapabilities.GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaCapabilities' }})
    
