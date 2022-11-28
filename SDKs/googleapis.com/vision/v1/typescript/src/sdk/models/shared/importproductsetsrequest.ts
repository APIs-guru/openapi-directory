import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportProductSetsInputConfig } from "./importproductsetsinputconfig";



// ImportProductSetsRequest
/** 
 * Request message for the `ImportProductSets` method.
**/
export class ImportProductSetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: ImportProductSetsInputConfig;
}
