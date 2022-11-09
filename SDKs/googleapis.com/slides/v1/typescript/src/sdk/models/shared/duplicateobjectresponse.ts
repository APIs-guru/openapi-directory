import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DuplicateObjectResponse
/** 
 * The response of duplicating an object.
**/
export class DuplicateObjectResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectId" })
  objectId?: string;
}
