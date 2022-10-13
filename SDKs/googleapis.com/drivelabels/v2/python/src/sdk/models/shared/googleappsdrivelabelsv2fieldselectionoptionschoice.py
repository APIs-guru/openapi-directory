from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2fieldselectionoptionschoiceappliedcapabilities
from . import googleappsdrivelabelsv2userinfo
from . import googleappsdrivelabelsv2userinfo
from . import googleappsdrivelabelsv2fieldselectionoptionschoicedisplayhints
from . import googleappsdrivelabelsv2lifecycle
from . import googleappsdrivelabelsv2lockstatus
from . import googleappsdrivelabelsv2fieldselectionoptionschoiceproperties
from . import googleappsdrivelabelsv2userinfo
from . import googleappsdrivelabelsv2fieldselectionoptionschoiceschemacapabilities
from . import googleappsdrivelabelsv2userinfo


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice:
    applied_capabilities: Optional[googleappsdrivelabelsv2fieldselectionoptionschoiceappliedcapabilities.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appliedCapabilities' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    creator: Optional[googleappsdrivelabelsv2userinfo.GoogleAppsDriveLabelsV2UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creator' }})
    disable_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableTime' }})
    disabler: Optional[googleappsdrivelabelsv2userinfo.GoogleAppsDriveLabelsV2UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabler' }})
    display_hints: Optional[googleappsdrivelabelsv2fieldselectionoptionschoicedisplayhints.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayHints' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    lifecycle: Optional[googleappsdrivelabelsv2lifecycle.GoogleAppsDriveLabelsV2Lifecycle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifecycle' }})
    lock_status: Optional[googleappsdrivelabelsv2lockstatus.GoogleAppsDriveLabelsV2LockStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lockStatus' }})
    properties: Optional[googleappsdrivelabelsv2fieldselectionoptionschoiceproperties.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    publish_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishTime' }})
    publisher: Optional[googleappsdrivelabelsv2userinfo.GoogleAppsDriveLabelsV2UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisher' }})
    schema_capabilities: Optional[googleappsdrivelabelsv2fieldselectionoptionschoiceschemacapabilities.GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaCapabilities' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    updater: Optional[googleappsdrivelabelsv2userinfo.GoogleAppsDriveLabelsV2UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updater' }})
    
