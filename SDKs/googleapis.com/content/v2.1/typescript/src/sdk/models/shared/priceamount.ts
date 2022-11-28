import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PriceAmount
/** 
 * The price represented as a number and currency.
**/
export class PriceAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
