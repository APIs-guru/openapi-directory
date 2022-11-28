import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Amount } from "./googlecloudpaymentsresellersubscriptionv1amount";



// GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig
/** 
 * Configs the prices in an available region.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: GoogleCloudPaymentsResellerSubscriptionV1Amount;

  @SpeakeasyMetadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
