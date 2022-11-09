import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Links
/** 
 * A series of links between resources in this API in the following [HAL specification](http://stateless.co/hal_specification.html).
**/
export class Links extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}
