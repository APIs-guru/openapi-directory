import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QueryTestablePermissionsRequest
/** 
 * A request to get permissions which can be tested on a resource.
**/
export class QueryTestablePermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
