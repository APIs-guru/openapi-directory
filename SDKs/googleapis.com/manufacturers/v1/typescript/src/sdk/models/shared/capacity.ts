import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Capacity
/** 
 * The capacity of a product. For more information, see https://support.google.com/manufacturers/answer/6124116#capacity.
**/
export class Capacity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
