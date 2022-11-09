import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PhotoId } from "./photoid";


// Connection
/** 
 * A connection is the link from a source photo to a destination photo.
**/
export class Connection extends SpeakeasyBase {
  @Metadata({ data: "json, name=target" })
  target?: PhotoId;
}
