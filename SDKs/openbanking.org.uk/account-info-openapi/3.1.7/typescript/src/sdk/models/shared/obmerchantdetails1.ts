import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObMerchantDetails1
/** 
 * Details of the merchant involved in the transaction.
**/
export class ObMerchantDetails1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=MerchantCategoryCode" })
  merchantCategoryCode?: string;

  @Metadata({ data: "json, name=MerchantName" })
  merchantName?: string;
}
