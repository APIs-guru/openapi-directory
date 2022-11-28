import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Count
/** 
 * The number of products in a single package. For more information, see https://support.google.com/manufacturers/answer/6124116#count.
**/
export class Count extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
