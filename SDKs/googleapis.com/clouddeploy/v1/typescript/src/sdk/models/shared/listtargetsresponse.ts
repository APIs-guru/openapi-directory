import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Target } from "./target";


// ListTargetsResponse
/** 
 * The response object from `ListTargets`.
**/
export class ListTargetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=targets", elemType: shared.Target })
  targets?: Target[];

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
