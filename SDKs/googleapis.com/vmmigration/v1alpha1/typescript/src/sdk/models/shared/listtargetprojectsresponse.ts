import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TargetProject } from "./targetproject";


// ListTargetProjectsResponse
/** 
 * Response message for 'ListTargetProjects' call.
**/
export class ListTargetProjectsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=targetProjects", elemType: shared.TargetProject })
  targetProjects?: TargetProject[];

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
