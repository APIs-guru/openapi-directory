import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MutationResult } from "./mutationresult";



// CommitResponse
/** 
 * The response for Datastore.Commit.
**/
export class CommitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commitTime" })
  commitTime?: string;

  @SpeakeasyMetadata({ data: "json, name=indexUpdates" })
  indexUpdates?: number;

  @SpeakeasyMetadata({ data: "json, name=mutationResults", elemType: MutationResult })
  mutationResults?: MutationResult[];
}
