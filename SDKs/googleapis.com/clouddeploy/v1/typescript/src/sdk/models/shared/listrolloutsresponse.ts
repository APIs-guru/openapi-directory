import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Rollout } from "./rollout";


// ListRolloutsResponse
/** 
 * ListRolloutsResponse is the response object reutrned by `ListRollouts`.
**/
export class ListRolloutsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=rollouts", elemType: shared.Rollout })
  rollouts?: Rollout[];

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
