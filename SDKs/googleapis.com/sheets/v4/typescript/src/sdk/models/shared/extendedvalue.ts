import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorValue } from "./errorvalue";


// ExtendedValue
/** 
 * The kinds of value that a cell in a spreadsheet can have.
**/
export class ExtendedValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=boolValue" })
  boolValue?: boolean;

  @Metadata({ data: "json, name=errorValue" })
  errorValue?: ErrorValue;

  @Metadata({ data: "json, name=formulaValue" })
  formulaValue?: string;

  @Metadata({ data: "json, name=numberValue" })
  numberValue?: number;

  @Metadata({ data: "json, name=stringValue" })
  stringValue?: string;
}
