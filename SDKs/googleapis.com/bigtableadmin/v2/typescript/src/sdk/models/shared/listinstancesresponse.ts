import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Instance } from "./instance";


// ListInstancesResponse
/** 
 * Response message for BigtableInstanceAdmin.ListInstances.
**/
export class ListInstancesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=failedLocations" })
  failedLocations?: string[];

  @Metadata({ data: "json, name=instances", elemType: shared.Instance })
  instances?: Instance[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
