import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Database } from "./database";


// ListDatabasesResponse
/** 
 * The response for ListDatabases.
**/
export class ListDatabasesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=databases", elemType: shared.Database })
  databases?: Database[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
