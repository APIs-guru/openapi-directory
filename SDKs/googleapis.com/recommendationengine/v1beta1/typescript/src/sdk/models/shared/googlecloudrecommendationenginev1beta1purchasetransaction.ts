import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRecommendationengineV1beta1PurchaseTransaction
/** 
 * A transaction represents the entire purchase transaction.
**/
export class GoogleCloudRecommendationengineV1beta1PurchaseTransaction extends SpeakeasyBase {
  @Metadata({ data: "json, name=costs" })
  costs?: Map<string, number>;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=revenue" })
  revenue?: number;

  @Metadata({ data: "json, name=taxes" })
  taxes?: Map<string, number>;
}
