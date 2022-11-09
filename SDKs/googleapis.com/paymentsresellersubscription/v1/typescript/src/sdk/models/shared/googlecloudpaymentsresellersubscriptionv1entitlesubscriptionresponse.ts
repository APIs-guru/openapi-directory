import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Subscription } from "./googlecloudpaymentsresellersubscriptionv1subscription";


export class GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=subscription" })
  subscription?: GoogleCloudPaymentsResellerSubscriptionV1Subscription;
}
