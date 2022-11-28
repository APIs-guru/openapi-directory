import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Mutation } from "./mutation";


export enum CommitRequestModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    Transactional = "TRANSACTIONAL",
    NonTransactional = "NON_TRANSACTIONAL"
}


// CommitRequest
/** 
 * The request for Datastore.Commit.
**/
export class CommitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: CommitRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=mutations", elemType: Mutation })
  mutations?: Mutation[];

  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction?: string;
}
