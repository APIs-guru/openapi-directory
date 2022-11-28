import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Zone } from "./zone";



// RevertZoneResponse
/** 
 * The result of reverting a zone in a workspace.
**/
export class RevertZoneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: Zone;
}
