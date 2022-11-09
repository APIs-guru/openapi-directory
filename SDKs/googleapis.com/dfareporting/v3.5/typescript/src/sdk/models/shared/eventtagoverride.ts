import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EventTagOverride
/** 
 * Event tag override information.
**/
export class EventTagOverride extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;
}
