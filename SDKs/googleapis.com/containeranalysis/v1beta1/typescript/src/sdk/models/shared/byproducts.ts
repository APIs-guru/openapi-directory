import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ByProducts
/** 
 * Defines an object for the byproducts field in in-toto links. The suggested fields are "stderr", "stdout", and "return-value".
**/
export class ByProducts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customValues" })
  customValues?: Map<string, string>;
}
