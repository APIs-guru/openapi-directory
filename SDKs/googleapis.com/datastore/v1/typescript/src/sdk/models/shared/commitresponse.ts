import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MutationResult } from "./mutationresult";


// CommitResponse
/** 
 * The response for Datastore.Commit.
**/
export class CommitResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=commitTime" })
  commitTime?: string;

  @Metadata({ data: "json, name=indexUpdates" })
  indexUpdates?: number;

  @Metadata({ data: "json, name=mutationResults", elemType: shared.MutationResult })
  mutationResults?: MutationResult[];
}
