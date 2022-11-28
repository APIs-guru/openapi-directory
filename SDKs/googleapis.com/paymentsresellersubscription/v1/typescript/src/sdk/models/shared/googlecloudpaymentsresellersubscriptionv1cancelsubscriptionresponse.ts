import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Subscription } from "./googlecloudpaymentsresellersubscriptionv1subscription";



export class GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=subscription" })
  subscription?: GoogleCloudPaymentsResellerSubscriptionV1Subscription;
}
