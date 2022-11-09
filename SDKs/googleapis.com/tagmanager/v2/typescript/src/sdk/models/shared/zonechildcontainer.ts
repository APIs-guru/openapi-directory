import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ZoneChildContainer
/** 
 * Represents a child container of a Zone.
**/
export class ZoneChildContainer extends SpeakeasyBase {
  @Metadata({ data: "json, name=nickname" })
  nickname?: string;

  @Metadata({ data: "json, name=publicId" })
  publicId?: string;
}
