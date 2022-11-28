import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Instance } from "./instance";



// ListInstancesResponse
/** 
 * Response for ListInstances.
**/
export class ListInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: Instance })
  resources?: Instance[];

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
