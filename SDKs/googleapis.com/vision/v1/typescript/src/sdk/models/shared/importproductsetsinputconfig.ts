import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImportProductSetsGcsSource } from "./importproductsetsgcssource";



// ImportProductSetsInputConfig
/** 
 * The input content for the `ImportProductSets` method.
**/
export class ImportProductSetsInputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsSource" })
  gcsSource?: ImportProductSetsGcsSource;
}
