import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateVideoResponse
/** 
 * The result of creating a video.
**/
export class CreateVideoResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectId" })
  objectId?: string;
}
