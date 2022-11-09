import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GdataCompositeMedia } from "./gdatacompositemedia";


// GdataDiffDownloadResponse
/** 
 * gdata
**/
export class GdataDiffDownloadResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectLocation" })
  objectLocation?: GdataCompositeMedia;
}
