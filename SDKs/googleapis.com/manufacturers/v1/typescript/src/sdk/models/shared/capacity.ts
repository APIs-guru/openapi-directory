import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Capacity
/** 
 * The capacity of a product. For more information, see https://support.google.com/manufacturers/answer/6124116#capacity.
**/
export class Capacity extends SpeakeasyBase {
  @Metadata({ data: "json, name=unit" })
  unit?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
