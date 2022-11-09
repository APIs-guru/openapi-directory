import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Mutation } from "./mutation";

export enum CommitRequestModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED"
,    Transactional = "TRANSACTIONAL"
,    NonTransactional = "NON_TRANSACTIONAL"
}


// CommitRequest
/** 
 * The request for Datastore.Commit.
**/
export class CommitRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=mode" })
  mode?: CommitRequestModeEnum;

  @Metadata({ data: "json, name=mutations", elemType: shared.Mutation })
  mutations?: Mutation[];

  @Metadata({ data: "json, name=transaction" })
  transaction?: string;
}
