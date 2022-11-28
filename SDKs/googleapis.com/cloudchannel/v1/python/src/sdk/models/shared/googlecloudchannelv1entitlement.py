from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudChannelV1EntitlementProvisioningStateEnum(str, Enum):
    PROVISIONING_STATE_UNSPECIFIED = "PROVISIONING_STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    SUSPENDED = "SUSPENDED"

class GoogleCloudChannelV1EntitlementSuspensionReasonsEnum(str, Enum):
    SUSPENSION_REASON_UNSPECIFIED = "SUSPENSION_REASON_UNSPECIFIED"
    RESELLER_INITIATED = "RESELLER_INITIATED"
    TRIAL_ENDED = "TRIAL_ENDED"
    RENEWAL_WITH_TYPE_CANCEL = "RENEWAL_WITH_TYPE_CANCEL"
    PENDING_TOS_ACCEPTANCE = "PENDING_TOS_ACCEPTANCE"
    OTHER = "OTHER"


@dataclass_json
@dataclass
class GoogleCloudChannelV1Entitlement:
    r"""GoogleCloudChannelV1Entitlement
    An entitlement is a representation of a customer's ability to use a service.
    """
    
    association_info: Optional[GoogleCloudChannelV1AssociationInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associationInfo') }})
    commitment_settings: Optional[GoogleCloudChannelV1CommitmentSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitmentSettings') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    offer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offer') }})
    parameters: Optional[List[GoogleCloudChannelV1Parameter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    provisioned_service: Optional[GoogleCloudChannelV1ProvisionedService] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisionedService') }})
    provisioning_state: Optional[GoogleCloudChannelV1EntitlementProvisioningStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisioningState') }})
    purchase_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseOrderId') }})
    suspension_reasons: Optional[List[GoogleCloudChannelV1EntitlementSuspensionReasonsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suspensionReasons') }})
    trial_settings: Optional[GoogleCloudChannelV1TrialSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trialSettings') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class GoogleCloudChannelV1EntitlementInput:
    r"""GoogleCloudChannelV1EntitlementInput
    An entitlement is a representation of a customer's ability to use a service.
    """
    
    association_info: Optional[GoogleCloudChannelV1AssociationInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associationInfo') }})
    commitment_settings: Optional[GoogleCloudChannelV1CommitmentSettingsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitmentSettings') }})
    offer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offer') }})
    parameters: Optional[List[GoogleCloudChannelV1ParameterInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    purchase_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseOrderId') }})
    trial_settings: Optional[GoogleCloudChannelV1TrialSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trialSettings') }})
    
