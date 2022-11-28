import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActivityContentDetailsUpload
/** 
 * Information about the uploaded video.
**/
export class ActivityContentDetailsUpload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=videoId" })
  videoId?: string;
}
