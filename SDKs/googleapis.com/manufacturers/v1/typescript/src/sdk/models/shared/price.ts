import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Price
/** 
 * A price.
**/
export class Price extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: string;
}
