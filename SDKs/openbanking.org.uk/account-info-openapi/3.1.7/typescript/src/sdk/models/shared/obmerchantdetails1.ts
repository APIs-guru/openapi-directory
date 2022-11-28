import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObMerchantDetails1
/** 
 * Details of the merchant involved in the transaction.
**/
export class ObMerchantDetails1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MerchantCategoryCode" })
  merchantCategoryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=MerchantName" })
  merchantName?: string;
}
