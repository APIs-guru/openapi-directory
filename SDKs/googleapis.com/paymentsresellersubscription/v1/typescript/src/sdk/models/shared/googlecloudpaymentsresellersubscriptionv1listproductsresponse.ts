import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Product } from "./googlecloudpaymentsresellersubscriptionv1product";



export class GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=products", elemType: GoogleCloudPaymentsResellerSubscriptionV1Product })
  products?: GoogleCloudPaymentsResellerSubscriptionV1Product[];
}
