import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";



// ListInstancesResponse
/** 
 * The response for ListInstances.
**/
export class ListInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instances", elemType: Instance })
  instances?: Instance[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
