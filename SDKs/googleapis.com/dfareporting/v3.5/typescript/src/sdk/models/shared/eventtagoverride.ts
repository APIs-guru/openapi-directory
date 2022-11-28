import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventTagOverride
/** 
 * Event tag override information.
**/
export class EventTagOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
