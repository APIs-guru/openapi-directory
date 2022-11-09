import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Rollout } from "./rollout";


// ListServiceRolloutsResponse
/** 
 * Response message for ListServiceRollouts method.
**/
export class ListServiceRolloutsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=rollouts", elemType: shared.Rollout })
  rollouts?: Rollout[];
}
