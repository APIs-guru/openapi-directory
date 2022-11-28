import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateLineResponse
/** 
 * The result of creating a line.
**/
export class CreateLineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;
}
