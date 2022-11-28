import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorValue } from "./errorvalue";



// ExtendedValue
/** 
 * The kinds of value that a cell in a spreadsheet can have.
**/
export class ExtendedValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=errorValue" })
  errorValue?: ErrorValue;

  @SpeakeasyMetadata({ data: "json, name=formulaValue" })
  formulaValue?: string;

  @SpeakeasyMetadata({ data: "json, name=numberValue" })
  numberValue?: number;

  @SpeakeasyMetadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
