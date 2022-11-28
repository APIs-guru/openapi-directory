import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputConfig } from "./inputconfig";



// ImportInstanceRequest
/** 
 * Request for Import.
**/
export class ImportInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: InputConfig;
}
