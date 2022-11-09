import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2alphaPurchaseTransaction
/** 
 * A transaction represents the entire purchase transaction.
**/
export class GoogleCloudRetailV2alphaPurchaseTransaction extends SpeakeasyBase {
  @Metadata({ data: "json, name=cost" })
  cost?: number;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=revenue" })
  revenue?: number;

  @Metadata({ data: "json, name=tax" })
  tax?: number;
}
