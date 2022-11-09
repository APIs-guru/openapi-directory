import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Instance } from "./instance";


// ListInstancesResponse
/** 
 * Response for ListInstances.
**/
export class ListInstancesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=resources", elemType: shared.Instance })
  resources?: Instance[];

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
