import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cycleEndTime" })
  cycleEndTime?: string;

  @SpeakeasyMetadata({ data: "json, name=freeTrialEndTime" })
  freeTrialEndTime?: string;

  @SpeakeasyMetadata({ data: "json, name=renewalTime" })
  renewalTime?: string;
}
