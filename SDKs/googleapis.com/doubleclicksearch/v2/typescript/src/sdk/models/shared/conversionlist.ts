import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Conversion } from "./conversion";



// ConversionList
/** 
 * A list of conversions.
**/
export class ConversionList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversion", elemType: Conversion })
  conversion?: Conversion[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
