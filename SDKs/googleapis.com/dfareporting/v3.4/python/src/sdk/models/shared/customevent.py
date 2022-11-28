from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CustomEventEventTypeEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    INSERT = "INSERT"
    ANNOTATE = "ANNOTATE"


@dataclass_json
@dataclass
class CustomEvent:
    r"""CustomEvent
    Experimental feature (no support provided) A custom event represents a third party impression, a third party click, an annotation on a first party impression, or an annotation on a first party click.
    """
    
    annotate_click_event: Optional[CustomEventClickAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotateClickEvent') }})
    annotate_impression_event: Optional[CustomEventImpressionAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotateImpressionEvent') }})
    custom_variables: Optional[List[CustomVariable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customVariables') }})
    event_type: Optional[CustomEventEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    floodlight_configuration_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodlightConfigurationId') }})
    insert_event: Optional[CustomEventInsert] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertEvent') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    ordinal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ordinal') }})
    timestamp_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampMicros') }})
    
