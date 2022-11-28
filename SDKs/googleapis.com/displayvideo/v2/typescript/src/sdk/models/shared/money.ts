import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Money
/** 
 * Represents an amount of money with its currency type.
**/
export class Money extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=nanos" })
  nanos?: number;

  @SpeakeasyMetadata({ data: "json, name=units" })
  units?: string;
}
