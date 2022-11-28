import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";



// ListInstancesResponse
/** 
 * Response message for BigtableInstanceAdmin.ListInstances.
**/
export class ListInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failedLocations" })
  failedLocations?: string[];

  @SpeakeasyMetadata({ data: "json, name=instances", elemType: Instance })
  instances?: Instance[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
