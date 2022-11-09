import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudChannelV1AssociationInfo } from "./googlecloudchannelv1associationinfo";
import { GoogleCloudChannelV1CommitmentSettings } from "./googlecloudchannelv1commitmentsettings";
import { GoogleCloudChannelV1Parameter } from "./googlecloudchannelv1parameter";
import { GoogleCloudChannelV1ProvisionedService } from "./googlecloudchannelv1provisionedservice";
import { GoogleCloudChannelV1TrialSettings } from "./googlecloudchannelv1trialsettings";

export enum GoogleCloudChannelV1EntitlementProvisioningStateEnum {
    ProvisioningStateUnspecified = "PROVISIONING_STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Suspended = "SUSPENDED"
}

export enum GoogleCloudChannelV1EntitlementSuspensionReasonsEnum {
    SuspensionReasonUnspecified = "SUSPENSION_REASON_UNSPECIFIED"
,    ResellerInitiated = "RESELLER_INITIATED"
,    TrialEnded = "TRIAL_ENDED"
,    RenewalWithTypeCancel = "RENEWAL_WITH_TYPE_CANCEL"
,    PendingTosAcceptance = "PENDING_TOS_ACCEPTANCE"
,    Other = "OTHER"
}


// GoogleCloudChannelV1Entitlement
/** 
 * An entitlement is a representation of a customer's ability to use a service.
**/
export class GoogleCloudChannelV1Entitlement extends SpeakeasyBase {
  @Metadata({ data: "json, name=associationInfo" })
  associationInfo?: GoogleCloudChannelV1AssociationInfo;

  @Metadata({ data: "json, name=commitmentSettings" })
  commitmentSettings?: GoogleCloudChannelV1CommitmentSettings;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=offer" })
  offer?: string;

  @Metadata({ data: "json, name=parameters", elemType: shared.GoogleCloudChannelV1Parameter })
  parameters?: GoogleCloudChannelV1Parameter[];

  @Metadata({ data: "json, name=provisionedService" })
  provisionedService?: GoogleCloudChannelV1ProvisionedService;

  @Metadata({ data: "json, name=provisioningState" })
  provisioningState?: GoogleCloudChannelV1EntitlementProvisioningStateEnum;

  @Metadata({ data: "json, name=purchaseOrderId" })
  purchaseOrderId?: string;

  @Metadata({ data: "json, name=suspensionReasons" })
  suspensionReasons?: GoogleCloudChannelV1EntitlementSuspensionReasonsEnum[];

  @Metadata({ data: "json, name=trialSettings" })
  trialSettings?: GoogleCloudChannelV1TrialSettings;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
