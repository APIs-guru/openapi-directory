import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateVideoResponse
/** 
 * The result of creating a video.
**/
export class CreateVideoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;
}
