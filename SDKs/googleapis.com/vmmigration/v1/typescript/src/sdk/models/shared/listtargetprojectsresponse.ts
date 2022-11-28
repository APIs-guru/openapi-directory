import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TargetProject } from "./targetproject";



// ListTargetProjectsResponse
/** 
 * Response message for 'ListTargetProjects' call.
**/
export class ListTargetProjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=targetProjects", elemType: TargetProject })
  targetProjects?: TargetProject[];

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
