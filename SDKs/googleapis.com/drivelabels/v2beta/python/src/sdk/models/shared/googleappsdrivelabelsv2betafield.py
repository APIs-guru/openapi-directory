from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2betafieldappliedcapabilities
from . import googleappsdrivelabelsv2betauserinfo
from . import googleappsdrivelabelsv2betafielddateoptions
from . import googleappsdrivelabelsv2betauserinfo
from . import googleappsdrivelabelsv2betafielddisplayhints
from . import googleappsdrivelabelsv2betafieldintegeroptions
from . import googleappsdrivelabelsv2betalifecycle
from . import googleappsdrivelabelsv2betalockstatus
from . import googleappsdrivelabelsv2betafieldproperties
from . import googleappsdrivelabelsv2betauserinfo
from . import googleappsdrivelabelsv2betafieldschemacapabilities
from . import googleappsdrivelabelsv2betafieldselectionoptions
from . import googleappsdrivelabelsv2betafieldtextoptions
from . import googleappsdrivelabelsv2betauserinfo
from . import googleappsdrivelabelsv2betafielduseroptions


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaField:
    applied_capabilities: Optional[googleappsdrivelabelsv2betafieldappliedcapabilities.GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appliedCapabilities' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    creator: Optional[googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creator' }})
    date_options: Optional[googleappsdrivelabelsv2betafielddateoptions.GoogleAppsDriveLabelsV2betaFieldDateOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateOptions' }})
    disable_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableTime' }})
    disabler: Optional[googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabler' }})
    display_hints: Optional[googleappsdrivelabelsv2betafielddisplayhints.GoogleAppsDriveLabelsV2betaFieldDisplayHints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayHints' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    integer_options: Optional[googleappsdrivelabelsv2betafieldintegeroptions.GoogleAppsDriveLabelsV2betaFieldIntegerOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integerOptions' }})
    lifecycle: Optional[googleappsdrivelabelsv2betalifecycle.GoogleAppsDriveLabelsV2betaLifecycle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifecycle' }})
    lock_status: Optional[googleappsdrivelabelsv2betalockstatus.GoogleAppsDriveLabelsV2betaLockStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lockStatus' }})
    properties: Optional[googleappsdrivelabelsv2betafieldproperties.GoogleAppsDriveLabelsV2betaFieldProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    publisher: Optional[googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisher' }})
    query_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryKey' }})
    schema_capabilities: Optional[googleappsdrivelabelsv2betafieldschemacapabilities.GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaCapabilities' }})
    selection_options: Optional[googleappsdrivelabelsv2betafieldselectionoptions.GoogleAppsDriveLabelsV2betaFieldSelectionOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectionOptions' }})
    text_options: Optional[googleappsdrivelabelsv2betafieldtextoptions.GoogleAppsDriveLabelsV2betaFieldTextOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textOptions' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    updater: Optional[googleappsdrivelabelsv2betauserinfo.GoogleAppsDriveLabelsV2betaUserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updater' }})
    user_options: Optional[googleappsdrivelabelsv2betafielduseroptions.GoogleAppsDriveLabelsV2betaFieldUserOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userOptions' }})
    
