import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InsertInlineImageResponse
/** 
 * The result of inserting an inline image.
**/
export class InsertInlineImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;
}
