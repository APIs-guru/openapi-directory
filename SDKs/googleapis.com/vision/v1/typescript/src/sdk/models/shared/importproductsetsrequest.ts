import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImportProductSetsInputConfig } from "./importproductsetsinputconfig";


// ImportProductSetsRequest
/** 
 * Request message for the `ImportProductSets` method.
**/
export class ImportProductSetsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputConfig" })
  inputConfig?: ImportProductSetsInputConfig;
}
