import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Price
/** 
 * A price.
**/
export class Price extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;
}
