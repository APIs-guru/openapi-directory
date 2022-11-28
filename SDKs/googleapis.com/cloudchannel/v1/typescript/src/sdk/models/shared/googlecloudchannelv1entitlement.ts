import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1AssociationInfo } from "./googlecloudchannelv1associationinfo";
import { GoogleCloudChannelV1CommitmentSettingsInput } from "./googlecloudchannelv1commitmentsettings";
import { GoogleCloudChannelV1ParameterInput } from "./googlecloudchannelv1parameter";
import { GoogleCloudChannelV1TrialSettings } from "./googlecloudchannelv1trialsettings";
import { GoogleCloudChannelV1CommitmentSettings } from "./googlecloudchannelv1commitmentsettings";
import { GoogleCloudChannelV1Parameter } from "./googlecloudchannelv1parameter";
import { GoogleCloudChannelV1ProvisionedService } from "./googlecloudchannelv1provisionedservice";


export enum GoogleCloudChannelV1EntitlementProvisioningStateEnum {
    ProvisioningStateUnspecified = "PROVISIONING_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Suspended = "SUSPENDED"
}

export enum GoogleCloudChannelV1EntitlementSuspensionReasonsEnum {
    SuspensionReasonUnspecified = "SUSPENSION_REASON_UNSPECIFIED",
    ResellerInitiated = "RESELLER_INITIATED",
    TrialEnded = "TRIAL_ENDED",
    RenewalWithTypeCancel = "RENEWAL_WITH_TYPE_CANCEL",
    PendingTosAcceptance = "PENDING_TOS_ACCEPTANCE",
    Other = "OTHER"
}


// GoogleCloudChannelV1EntitlementInput
/** 
 * An entitlement is a representation of a customer's ability to use a service.
**/
export class GoogleCloudChannelV1EntitlementInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associationInfo" })
  associationInfo?: GoogleCloudChannelV1AssociationInfo;

  @SpeakeasyMetadata({ data: "json, name=commitmentSettings" })
  commitmentSettings?: GoogleCloudChannelV1CommitmentSettingsInput;

  @SpeakeasyMetadata({ data: "json, name=offer" })
  offer?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: GoogleCloudChannelV1ParameterInput })
  parameters?: GoogleCloudChannelV1ParameterInput[];

  @SpeakeasyMetadata({ data: "json, name=purchaseOrderId" })
  purchaseOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=trialSettings" })
  trialSettings?: GoogleCloudChannelV1TrialSettings;
}


// GoogleCloudChannelV1Entitlement
/** 
 * An entitlement is a representation of a customer's ability to use a service.
**/
export class GoogleCloudChannelV1Entitlement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associationInfo" })
  associationInfo?: GoogleCloudChannelV1AssociationInfo;

  @SpeakeasyMetadata({ data: "json, name=commitmentSettings" })
  commitmentSettings?: GoogleCloudChannelV1CommitmentSettings;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=offer" })
  offer?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: GoogleCloudChannelV1Parameter })
  parameters?: GoogleCloudChannelV1Parameter[];

  @SpeakeasyMetadata({ data: "json, name=provisionedService" })
  provisionedService?: GoogleCloudChannelV1ProvisionedService;

  @SpeakeasyMetadata({ data: "json, name=provisioningState" })
  provisioningState?: GoogleCloudChannelV1EntitlementProvisioningStateEnum;

  @SpeakeasyMetadata({ data: "json, name=purchaseOrderId" })
  purchaseOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=suspensionReasons" })
  suspensionReasons?: GoogleCloudChannelV1EntitlementSuspensionReasonsEnum[];

  @SpeakeasyMetadata({ data: "json, name=trialSettings" })
  trialSettings?: GoogleCloudChannelV1TrialSettings;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
