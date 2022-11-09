import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Amount } from "./googlecloudpaymentsresellersubscriptionv1amount";


// GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig
/** 
 * Configs the prices in an available region.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: GoogleCloudPaymentsResellerSubscriptionV1Amount;

  @Metadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
