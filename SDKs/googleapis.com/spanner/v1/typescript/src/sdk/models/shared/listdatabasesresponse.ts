import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Database } from "./database";



// ListDatabasesResponse
/** 
 * The response for ListDatabases.
**/
export class ListDatabasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=databases", elemType: Database })
  databases?: Database[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
