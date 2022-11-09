import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Count
/** 
 * The number of products in a single package. For more information, see https://support.google.com/manufacturers/answer/6124116#count.
**/
export class Count extends SpeakeasyBase {
  @Metadata({ data: "json, name=unit" })
  unit?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
