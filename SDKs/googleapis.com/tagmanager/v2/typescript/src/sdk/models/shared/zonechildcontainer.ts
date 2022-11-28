import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ZoneChildContainer
/** 
 * Represents a child container of a Zone.
**/
export class ZoneChildContainer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nickname" })
  nickname?: string;

  @SpeakeasyMetadata({ data: "json, name=publicId" })
  publicId?: string;
}
