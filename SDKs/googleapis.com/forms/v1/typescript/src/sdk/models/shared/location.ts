import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Location
/** 
 * A specific location in a form.
**/
export class Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=index" })
  index?: number;
}
