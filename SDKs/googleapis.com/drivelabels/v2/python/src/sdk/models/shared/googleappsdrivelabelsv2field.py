from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleappsdrivelabelsv2fieldappliedcapabilities
from . import googleappsdrivelabelsv2userinfo
from . import googleappsdrivelabelsv2fielddateoptions
from . import googleappsdrivelabelsv2userinfo
from . import googleappsdrivelabelsv2fielddisplayhints
from . import googleappsdrivelabelsv2fieldintegeroptions
from . import googleappsdrivelabelsv2lifecycle
from . import googleappsdrivelabelsv2lockstatus
from . import googleappsdrivelabelsv2fieldproperties
from . import googleappsdrivelabelsv2userinfo
from . import googleappsdrivelabelsv2fieldschemacapabilities
from . import googleappsdrivelabelsv2fieldselectionoptions
from . import googleappsdrivelabelsv2fieldtextoptions
from . import googleappsdrivelabelsv2userinfo
from . import googleappsdrivelabelsv2fielduseroptions


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2Field:
    applied_capabilities: Optional[googleappsdrivelabelsv2fieldappliedcapabilities.GoogleAppsDriveLabelsV2FieldAppliedCapabilities] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appliedCapabilities' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    creator: Optional[googleappsdrivelabelsv2userinfo.GoogleAppsDriveLabelsV2UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creator' }})
    date_options: Optional[googleappsdrivelabelsv2fielddateoptions.GoogleAppsDriveLabelsV2FieldDateOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateOptions' }})
    disable_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableTime' }})
    disabler: Optional[googleappsdrivelabelsv2userinfo.GoogleAppsDriveLabelsV2UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabler' }})
    display_hints: Optional[googleappsdrivelabelsv2fielddisplayhints.GoogleAppsDriveLabelsV2FieldDisplayHints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayHints' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    integer_options: Optional[googleappsdrivelabelsv2fieldintegeroptions.GoogleAppsDriveLabelsV2FieldIntegerOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integerOptions' }})
    lifecycle: Optional[googleappsdrivelabelsv2lifecycle.GoogleAppsDriveLabelsV2Lifecycle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifecycle' }})
    lock_status: Optional[googleappsdrivelabelsv2lockstatus.GoogleAppsDriveLabelsV2LockStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lockStatus' }})
    properties: Optional[googleappsdrivelabelsv2fieldproperties.GoogleAppsDriveLabelsV2FieldProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    publisher: Optional[googleappsdrivelabelsv2userinfo.GoogleAppsDriveLabelsV2UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisher' }})
    query_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryKey' }})
    schema_capabilities: Optional[googleappsdrivelabelsv2fieldschemacapabilities.GoogleAppsDriveLabelsV2FieldSchemaCapabilities] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaCapabilities' }})
    selection_options: Optional[googleappsdrivelabelsv2fieldselectionoptions.GoogleAppsDriveLabelsV2FieldSelectionOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectionOptions' }})
    text_options: Optional[googleappsdrivelabelsv2fieldtextoptions.GoogleAppsDriveLabelsV2FieldTextOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textOptions' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    updater: Optional[googleappsdrivelabelsv2userinfo.GoogleAppsDriveLabelsV2UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updater' }})
    user_options: Optional[googleappsdrivelabelsv2fielduseroptions.GoogleAppsDriveLabelsV2FieldUserOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userOptions' }})
    
