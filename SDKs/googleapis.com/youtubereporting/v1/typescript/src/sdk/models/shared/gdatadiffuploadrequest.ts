import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GdataCompositeMedia } from "./gdatacompositemedia";
import { GdataCompositeMedia } from "./gdatacompositemedia";


// GdataDiffUploadRequest
/** 
 * gdata
**/
export class GdataDiffUploadRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=checksumsInfo" })
  checksumsInfo?: GdataCompositeMedia;

  @Metadata({ data: "json, name=objectInfo" })
  objectInfo?: GdataCompositeMedia;

  @Metadata({ data: "json, name=objectVersion" })
  objectVersion?: string;
}
