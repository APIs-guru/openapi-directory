import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatabaseInstance } from "./databaseinstance";
import { ApiWarning } from "./apiwarning";



// InstancesListResponse
/** 
 * Database instances list response.
**/
export class InstancesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: DatabaseInstance })
  items?: DatabaseInstance[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: ApiWarning })
  warnings?: ApiWarning[];
}
