import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateTableResponse
/** 
 * The result of creating a table.
**/
export class CreateTableResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectId" })
  objectId?: string;
}
