import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GdataCompositeMedia } from "./gdatacompositemedia";



// GdataDiffUploadResponse
/** 
 * gdata
**/
export class GdataDiffUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectVersion" })
  objectVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=originalObject" })
  originalObject?: GdataCompositeMedia;
}
