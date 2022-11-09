import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateImageResponse
/** 
 * The result of creating an image.
**/
export class CreateImageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectId" })
  objectId?: string;
}
