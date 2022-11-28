import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Location
/** 
 * A specific location in a form.
**/
export class Location extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;
}
