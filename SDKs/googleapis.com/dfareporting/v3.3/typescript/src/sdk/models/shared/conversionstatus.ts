import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Conversion } from "./conversion";
import { ConversionError } from "./conversionerror";


// ConversionStatus
/** 
 * The original conversion that was inserted or updated and whether there were any errors.
**/
export class ConversionStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversion" })
  conversion?: Conversion;

  @Metadata({ data: "json, name=errors", elemType: shared.ConversionError })
  errors?: ConversionError[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
