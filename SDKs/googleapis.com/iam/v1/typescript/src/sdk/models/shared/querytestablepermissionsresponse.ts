import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Permission } from "./permission";


// QueryTestablePermissionsResponse
/** 
 * The response containing permissions which can be tested on a resource.
**/
export class QueryTestablePermissionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=permissions", elemType: shared.Permission })
  permissions?: Permission[];
}
