import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RestoreTableRequest
/** 
 * The request for RestoreTable.
**/
export class RestoreTableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backup" })
  backup?: string;

  @SpeakeasyMetadata({ data: "json, name=tableId" })
  tableId?: string;
}
