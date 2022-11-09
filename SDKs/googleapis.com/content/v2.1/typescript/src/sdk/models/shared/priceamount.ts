import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PriceAmount
/** 
 * The price represented as a number and currency.
**/
export class PriceAmount extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
