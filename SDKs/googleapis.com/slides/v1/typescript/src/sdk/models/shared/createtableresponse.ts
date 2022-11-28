import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateTableResponse
/** 
 * The result of creating a table.
**/
export class CreateTableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;
}
