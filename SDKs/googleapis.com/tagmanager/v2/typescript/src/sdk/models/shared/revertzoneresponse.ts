import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Zone } from "./zone";


// RevertZoneResponse
/** 
 * The result of reverting a zone in a workspace.
**/
export class RevertZoneResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=zone" })
  zone?: Zone;
}
