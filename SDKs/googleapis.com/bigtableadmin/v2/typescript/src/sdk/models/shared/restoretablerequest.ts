import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RestoreTableRequest
/** 
 * The request for RestoreTable.
**/
export class RestoreTableRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=backup" })
  backup?: string;

  @Metadata({ data: "json, name=tableId" })
  tableId?: string;
}
