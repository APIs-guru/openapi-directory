from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customfloodlightvariable


@dataclass_json
@dataclass
class Conversion:
    child_directed_treatment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childDirectedTreatment' }})
    custom_variables: Optional[List[customfloodlightvariable.CustomFloodlightVariable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customVariables' }})
    encrypted_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptedUserId' }})
    encrypted_user_id_candidates: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptedUserIdCandidates' }})
    floodlight_activity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floodlightActivityId' }})
    floodlight_configuration_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floodlightConfigurationId' }})
    gclid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gclid' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    limit_ad_tracking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limitAdTracking' }})
    match_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchId' }})
    mobile_device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileDeviceId' }})
    non_personalized_ad: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonPersonalizedAd' }})
    ordinal: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ordinal' }})
    quantity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    timestamp_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestampMicros' }})
    treatment_for_underage: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'treatmentForUnderage' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
