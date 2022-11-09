import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatabaseInstance } from "./databaseinstance";
import { ApiWarning } from "./apiwarning";


// InstancesListResponse
/** 
 * Database instances list response.
**/
export class InstancesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.DatabaseInstance })
  items?: DatabaseInstance[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=warnings", elemType: shared.ApiWarning })
  warnings?: ApiWarning[];
}
