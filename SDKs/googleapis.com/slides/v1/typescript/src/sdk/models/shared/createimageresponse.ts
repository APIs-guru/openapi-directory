import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateImageResponse
/** 
 * The result of creating an image.
**/
export class CreateImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;
}
