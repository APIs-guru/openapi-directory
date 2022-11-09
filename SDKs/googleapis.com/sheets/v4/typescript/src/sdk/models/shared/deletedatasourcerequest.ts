import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteDataSourceRequest
/** 
 * Deletes a data source. The request also deletes the associated data source sheet, and unlinks all associated data source objects.
**/
export class DeleteDataSourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSourceId" })
  dataSourceId?: string;
}
