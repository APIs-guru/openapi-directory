import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Rollout } from "./rollout";



// ListServiceRolloutsResponse
/** 
 * Response message for ListServiceRollouts method.
**/
export class ListServiceRolloutsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=rollouts", elemType: Rollout })
  rollouts?: Rollout[];
}
