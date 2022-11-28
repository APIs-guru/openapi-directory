import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecommendationengineV1beta1PurchaseTransaction
/** 
 * A transaction represents the entire purchase transaction.
**/
export class GoogleCloudRecommendationengineV1beta1PurchaseTransaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=costs" })
  costs?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=revenue" })
  revenue?: number;

  @SpeakeasyMetadata({ data: "json, name=taxes" })
  taxes?: Map<string, number>;
}
