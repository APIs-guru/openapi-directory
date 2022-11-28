import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1AssociationInfo } from "./googlecloudchannelv1associationinfo";
import { GoogleCloudChannelV1CommitmentSettingsInput } from "./googlecloudchannelv1commitmentsettings";
import { GoogleCloudChannelV1ParameterInput } from "./googlecloudchannelv1parameter";
import { GoogleCloudChannelV1TrialSettings } from "./googlecloudchannelv1trialsettings";
import { GoogleCloudChannelV1CommitmentSettings } from "./googlecloudchannelv1commitmentsettings";
import { GoogleCloudChannelV1Parameter } from "./googlecloudchannelv1parameter";
import { GoogleCloudChannelV1ProvisionedService } from "./googlecloudchannelv1provisionedservice";
export declare enum GoogleCloudChannelV1EntitlementProvisioningStateEnum {
    ProvisioningStateUnspecified = "PROVISIONING_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Suspended = "SUSPENDED"
}
export declare enum GoogleCloudChannelV1EntitlementSuspensionReasonsEnum {
    SuspensionReasonUnspecified = "SUSPENSION_REASON_UNSPECIFIED",
    ResellerInitiated = "RESELLER_INITIATED",
    TrialEnded = "TRIAL_ENDED",
    RenewalWithTypeCancel = "RENEWAL_WITH_TYPE_CANCEL",
    PendingTosAcceptance = "PENDING_TOS_ACCEPTANCE",
    Other = "OTHER"
}
/**
 * An entitlement is a representation of a customer's ability to use a service.
**/
export declare class GoogleCloudChannelV1EntitlementInput extends SpeakeasyBase {
    associationInfo?: GoogleCloudChannelV1AssociationInfo;
    commitmentSettings?: GoogleCloudChannelV1CommitmentSettingsInput;
    offer?: string;
    parameters?: GoogleCloudChannelV1ParameterInput[];
    purchaseOrderId?: string;
    trialSettings?: GoogleCloudChannelV1TrialSettings;
}
/**
 * An entitlement is a representation of a customer's ability to use a service.
**/
export declare class GoogleCloudChannelV1Entitlement extends SpeakeasyBase {
    associationInfo?: GoogleCloudChannelV1AssociationInfo;
    commitmentSettings?: GoogleCloudChannelV1CommitmentSettings;
    createTime?: string;
    name?: string;
    offer?: string;
    parameters?: GoogleCloudChannelV1Parameter[];
    provisionedService?: GoogleCloudChannelV1ProvisionedService;
    provisioningState?: GoogleCloudChannelV1EntitlementProvisioningStateEnum;
    purchaseOrderId?: string;
    suspensionReasons?: GoogleCloudChannelV1EntitlementSuspensionReasonsEnum[];
    trialSettings?: GoogleCloudChannelV1TrialSettings;
    updateTime?: string;
}
