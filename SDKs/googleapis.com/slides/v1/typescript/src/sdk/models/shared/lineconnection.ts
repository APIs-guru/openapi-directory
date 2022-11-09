import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LineConnection
/** 
 * The properties for one end of a Line connection.
**/
export class LineConnection extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectedObjectId" })
  connectedObjectId?: string;

  @Metadata({ data: "json, name=connectionSiteIndex" })
  connectionSiteIndex?: number;
}
