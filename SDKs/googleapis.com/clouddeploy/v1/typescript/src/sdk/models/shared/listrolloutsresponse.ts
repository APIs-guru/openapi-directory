import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Rollout } from "./rollout";



// ListRolloutsResponse
/** 
 * ListRolloutsResponse is the response object reutrned by `ListRollouts`.
**/
export class ListRolloutsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=rollouts", elemType: Rollout })
  rollouts?: Rollout[];

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
