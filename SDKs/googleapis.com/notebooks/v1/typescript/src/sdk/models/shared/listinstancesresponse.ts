import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Instance } from "./instance";


// ListInstancesResponse
/** 
 * Response for listing notebook instances.
**/
export class ListInstancesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=instances", elemType: shared.Instance })
  instances?: Instance[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
