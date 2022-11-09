import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleTypeMoney
/** 
 * Represents an amount of money with its currency type.
**/
export class GoogleTypeMoney extends SpeakeasyBase {
  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=nanos" })
  nanos?: number;

  @Metadata({ data: "json, name=units" })
  units?: string;
}
