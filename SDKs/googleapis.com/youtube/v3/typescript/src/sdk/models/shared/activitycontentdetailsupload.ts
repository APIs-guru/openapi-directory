import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActivityContentDetailsUpload
/** 
 * Information about the uploaded video.
**/
export class ActivityContentDetailsUpload extends SpeakeasyBase {
  @Metadata({ data: "json, name=videoId" })
  videoId?: string;
}
