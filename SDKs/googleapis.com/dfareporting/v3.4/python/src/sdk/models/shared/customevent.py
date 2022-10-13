from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import customeventclickannotation
from . import customeventimpressionannotation
from . import customvariable
from . import customeventinsert

class CustomEventEventTypeEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    INSERT = "INSERT"
    ANNOTATE = "ANNOTATE"


@dataclass_json
@dataclass
class CustomEvent:
    annotate_click_event: Optional[customeventclickannotation.CustomEventClickAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotateClickEvent' }})
    annotate_impression_event: Optional[customeventimpressionannotation.CustomEventImpressionAnnotation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotateImpressionEvent' }})
    custom_variables: Optional[List[customvariable.CustomVariable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customVariables' }})
    event_type: Optional[CustomEventEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventType' }})
    floodlight_configuration_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floodlightConfigurationId' }})
    insert_event: Optional[customeventinsert.CustomEventInsert] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertEvent' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    ordinal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ordinal' }})
    timestamp_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestampMicros' }})
    
