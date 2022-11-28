import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DuplicateObjectResponse
/** 
 * The response of duplicating an object.
**/
export class DuplicateObjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;
}
