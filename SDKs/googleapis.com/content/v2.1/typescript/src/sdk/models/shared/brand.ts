import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Brand
/** 
 * Brand fields. Values are only set for fields requested explicitly in the request's search query.
**/
export class Brand extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
