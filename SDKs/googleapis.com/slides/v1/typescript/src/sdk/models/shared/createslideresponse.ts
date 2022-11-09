import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateSlideResponse
/** 
 * The result of creating a slide.
**/
export class CreateSlideResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectId" })
  objectId?: string;
}
