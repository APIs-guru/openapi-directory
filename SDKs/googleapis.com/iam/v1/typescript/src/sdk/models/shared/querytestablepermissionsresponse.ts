import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Permission } from "./permission";



// QueryTestablePermissionsResponse
/** 
 * The response containing permissions which can be tested on a resource.
**/
export class QueryTestablePermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=permissions", elemType: Permission })
  permissions?: Permission[];
}
