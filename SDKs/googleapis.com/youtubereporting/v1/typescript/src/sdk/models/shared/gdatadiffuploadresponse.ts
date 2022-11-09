import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GdataCompositeMedia } from "./gdatacompositemedia";


// GdataDiffUploadResponse
/** 
 * gdata
**/
export class GdataDiffUploadResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectVersion" })
  objectVersion?: string;

  @Metadata({ data: "json, name=originalObject" })
  originalObject?: GdataCompositeMedia;
}
