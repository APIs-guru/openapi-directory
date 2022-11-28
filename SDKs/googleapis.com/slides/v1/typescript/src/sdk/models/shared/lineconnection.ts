import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LineConnection
/** 
 * The properties for one end of a Line connection.
**/
export class LineConnection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectedObjectId" })
  connectedObjectId?: string;

  @SpeakeasyMetadata({ data: "json, name=connectionSiteIndex" })
  connectionSiteIndex?: number;
}
