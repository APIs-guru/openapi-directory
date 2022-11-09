import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Conversion } from "./conversion";


// ConversionList
/** 
 * A list of conversions.
**/
export class ConversionList extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversion", elemType: shared.Conversion })
  conversion?: Conversion[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
