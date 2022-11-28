import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2alphaPurchaseTransaction
/** 
 * A transaction represents the entire purchase transaction.
**/
export class GoogleCloudRetailV2alphaPurchaseTransaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cost" })
  cost?: number;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=revenue" })
  revenue?: number;

  @SpeakeasyMetadata({ data: "json, name=tax" })
  tax?: number;
}
