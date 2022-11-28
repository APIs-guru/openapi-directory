import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatabaseInstance } from "./databaseinstance";



// ListDatabaseInstancesResponse
/** 
 * The response from the ListDatabaseInstances method.
**/
export class ListDatabaseInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instances", elemType: DatabaseInstance })
  instances?: DatabaseInstance[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
