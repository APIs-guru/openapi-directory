import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Conversion } from "./conversion";
import { ConversionError } from "./conversionerror";



// ConversionStatus
/** 
 * The original conversion that was inserted or updated and whether there were any errors.
**/
export class ConversionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversion" })
  conversion?: Conversion;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ConversionError })
  errors?: ConversionError[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
