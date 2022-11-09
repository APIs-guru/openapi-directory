import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InputConfig } from "./inputconfig";


// ImportInstanceRequest
/** 
 * Request for Import.
**/
export class ImportInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputConfig" })
  inputConfig?: InputConfig;
}
