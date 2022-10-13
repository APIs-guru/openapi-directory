from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1associationinfo
from . import googlecloudchannelv1commitmentsettings
from . import googlecloudchannelv1parameter
from . import googlecloudchannelv1provisionedservice
from . import googlecloudchannelv1trialsettings

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
    association_info: Optional[googlecloudchannelv1associationinfo.GoogleCloudChannelV1AssociationInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associationInfo' }})
    commitment_settings: Optional[googlecloudchannelv1commitmentsettings.GoogleCloudChannelV1CommitmentSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commitmentSettings' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    offer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offer' }})
    parameters: Optional[List[googlecloudchannelv1parameter.GoogleCloudChannelV1Parameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    provisioned_service: Optional[googlecloudchannelv1provisionedservice.GoogleCloudChannelV1ProvisionedService] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provisionedService' }})
    provisioning_state: Optional[GoogleCloudChannelV1EntitlementProvisioningStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provisioningState' }})
    purchase_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchaseOrderId' }})
    suspension_reasons: Optional[List[GoogleCloudChannelV1EntitlementSuspensionReasonsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suspensionReasons' }})
    trial_settings: Optional[googlecloudchannelv1trialsettings.GoogleCloudChannelV1TrialSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trialSettings' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
