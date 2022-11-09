import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudPaymentsResellerSubscriptionV1Product } from "./googlecloudpaymentsresellersubscriptionv1product";


export class GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=products", elemType: shared.GoogleCloudPaymentsResellerSubscriptionV1Product })
  products?: GoogleCloudPaymentsResellerSubscriptionV1Product[];
}
