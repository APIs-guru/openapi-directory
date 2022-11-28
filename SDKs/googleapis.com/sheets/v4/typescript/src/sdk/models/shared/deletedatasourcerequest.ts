import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteDataSourceRequest
/** 
 * Deletes a data source. The request also deletes the associated data source sheet, and unlinks all associated data source objects.
**/
export class DeleteDataSourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSourceId" })
  dataSourceId?: string;
}
