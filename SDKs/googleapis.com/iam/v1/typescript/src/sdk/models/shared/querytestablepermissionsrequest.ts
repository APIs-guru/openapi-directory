import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QueryTestablePermissionsRequest
/** 
 * A request to get permissions which can be tested on a resource.
**/
export class QueryTestablePermissionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fullResourceName" })
  fullResourceName?: string;

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
