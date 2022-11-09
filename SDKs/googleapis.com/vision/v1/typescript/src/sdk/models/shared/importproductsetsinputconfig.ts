import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImportProductSetsGcsSource } from "./importproductsetsgcssource";


// ImportProductSetsInputConfig
/** 
 * The input content for the `ImportProductSets` method.
**/
export class ImportProductSetsInputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsSource" })
  gcsSource?: ImportProductSetsGcsSource;
}
