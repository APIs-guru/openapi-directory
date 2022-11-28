import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateSlideResponse
/** 
 * The result of creating a slide.
**/
export class CreateSlideResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;
}
