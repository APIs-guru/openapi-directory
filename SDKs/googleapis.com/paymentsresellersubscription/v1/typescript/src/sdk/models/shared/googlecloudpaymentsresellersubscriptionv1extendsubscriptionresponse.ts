import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cycleEndTime" })
  cycleEndTime?: string;

  @Metadata({ data: "json, name=freeTrialEndTime" })
  freeTrialEndTime?: string;

  @Metadata({ data: "json, name=renewalTime" })
  renewalTime?: string;
}
