import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatabaseInstance } from "./databaseinstance";


// ListDatabaseInstancesResponse
/** 
 * The response from the ListDatabaseInstances method.
**/
export class ListDatabaseInstancesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=instances", elemType: shared.DatabaseInstance })
  instances?: DatabaseInstance[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
