import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PhotoId } from "./photoid";



// Connection
/** 
 * A connection is the link from a source photo to a destination photo.
**/
export class Connection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: PhotoId;
}
