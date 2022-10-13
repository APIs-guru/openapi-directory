from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betafieldselectionoptionschoiceappliedcapabilities
from . import googleappsdrivelabelsv2betauserinfo
from . import googleappsdrivelabelsv2betauserinfo
from . import googleappsdrivelabelsv2betafieldselectionoptionschoicedisplayhints
from . import googleappsdrivelabelsv2betalifecycle
from . import googleappsdrivelabelsv2betalockstatus
from . import googleappsdrivelabelsv2betafieldselectionoptionschoiceproperties
from . import googleappsdrivelabelsv2betauserinfo
from . import googleappsdrivelabelsv2betafieldselectionoptionschoiceschemacapabilities
from . import googleappsdrivelabelsv2betauserinfo


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice:
    applied_capabilities: Optional[googleappsdrivelabelsv2betafieldselectionoptionschoiceappliedcapabilities.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appliedCapabilities' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    creator: Optional[googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creator' }})
    disable_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableTime' }})
    disabler: Optional[googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabler' }})
    display_hints: Optional[googleappsdrivelabelsv2betafieldselectionoptionschoicedisplayhints.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayHints' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    lifecycle: Optional[googleappsdrivelabelsv2betalifecycle.GoogleAppsDriveLabelsV2betaLifecycle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifecycle' }})
    lock_status: Optional[googleappsdrivelabelsv2betalockstatus.GoogleAppsDriveLabelsV2betaLockStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lockStatus' }})
    properties: Optional[googleappsdrivelabelsv2betafieldselectionoptionschoiceproperties.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    publish_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishTime' }})
    publisher: Optional[googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisher' }})
    schema_capabilities: Optional[googleappsdrivelabelsv2betafieldselectionoptionschoiceschemacapabilities.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaCapabilities' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    updater: Optional[googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updater' }})
    
