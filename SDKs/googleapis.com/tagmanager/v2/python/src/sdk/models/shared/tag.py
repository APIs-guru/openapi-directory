from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TagTagFiringOptionEnum(str, Enum):
    TAG_FIRING_OPTION_UNSPECIFIED = "tagFiringOptionUnspecified"
    UNLIMITED = "unlimited"
    ONCE_PER_EVENT = "oncePerEvent"
    ONCE_PER_LOAD = "oncePerLoad"


@dataclass_json
@dataclass
class Tag:
    r"""Tag
    Represents a Google Tag Manager Tag.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    blocking_rule_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockingRuleId') }})
    blocking_trigger_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockingTriggerId') }})
    consent_settings: Optional[TagConsentSetting] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentSettings') }})
    container_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerId') }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    firing_rule_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firingRuleId') }})
    firing_trigger_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firingTriggerId') }})
    live_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liveOnly') }})
    monitoring_metadata: Optional[Parameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoringMetadata') }})
    monitoring_metadata_tag_name_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monitoringMetadataTagNameKey') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    parameter: Optional[List[Parameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter') }})
    parent_folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentFolderId') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    paused: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paused') }})
    priority: Optional[Parameter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    schedule_end_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleEndMs') }})
    schedule_start_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleStartMs') }})
    setup_tag: Optional[List[SetupTag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setupTag') }})
    tag_firing_option: Optional[TagTagFiringOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagFiringOption') }})
    tag_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagId') }})
    tag_manager_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagManagerUrl') }})
    teardown_tag: Optional[List[TeardownTag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teardownTag') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    workspace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspaceId') }})
    
