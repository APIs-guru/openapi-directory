import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ByProducts
/** 
 * Defines an object for the byproducts field in in-toto links. The suggested fields are "stderr", "stdout", and "return-value".
**/
export class ByProducts extends SpeakeasyBase {
  @Metadata({ data: "json, name=customValues" })
  customValues?: Map<string, string>;
}
