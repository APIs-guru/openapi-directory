import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GdataCompositeMedia } from "./gdatacompositemedia";



// GdataDiffUploadRequest
/** 
 * gdata
**/
export class GdataDiffUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checksumsInfo" })
  checksumsInfo?: GdataCompositeMedia;

  @SpeakeasyMetadata({ data: "json, name=objectInfo" })
  objectInfo?: GdataCompositeMedia;

  @SpeakeasyMetadata({ data: "json, name=objectVersion" })
  objectVersion?: string;
}
