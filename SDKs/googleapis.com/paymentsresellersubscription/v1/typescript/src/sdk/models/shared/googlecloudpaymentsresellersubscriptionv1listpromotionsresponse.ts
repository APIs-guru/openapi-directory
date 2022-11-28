import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Promotion } from "./googlecloudpaymentsresellersubscriptionv1promotion";



export class GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=promotions", elemType: GoogleCloudPaymentsResellerSubscriptionV1Promotion })
  promotions?: GoogleCloudPaymentsResellerSubscriptionV1Promotion[];
}
