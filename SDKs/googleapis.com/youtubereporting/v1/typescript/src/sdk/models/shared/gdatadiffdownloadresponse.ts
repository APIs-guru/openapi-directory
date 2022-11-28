import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GdataCompositeMedia } from "./gdatacompositemedia";



// GdataDiffDownloadResponse
/** 
 * gdata
**/
export class GdataDiffDownloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectLocation" })
  objectLocation?: GdataCompositeMedia;
}
