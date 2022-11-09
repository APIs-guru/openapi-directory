import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateLineResponse
/** 
 * The result of creating a line.
**/
export class CreateLineResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectId" })
  objectId?: string;
}
