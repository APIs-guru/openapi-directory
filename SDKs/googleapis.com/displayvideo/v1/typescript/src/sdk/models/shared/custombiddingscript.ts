import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ScriptError } from "./scripterror";
import { CustomBiddingScriptRef } from "./custombiddingscriptref";

export enum CustomBiddingScriptStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Accepted = "ACCEPTED"
,    Rejected = "REJECTED"
,    Pending = "PENDING"
}


// CustomBiddingScript
/** 
 * A single custom bidding script.
**/
export class CustomBiddingScript extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=customBiddingAlgorithmId" })
  customBiddingAlgorithmId?: string;

  @Metadata({ data: "json, name=customBiddingScriptId" })
  customBiddingScriptId?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.ScriptError })
  errors?: ScriptError[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=script" })
  script?: CustomBiddingScriptRef;

  @Metadata({ data: "json, name=state" })
  state?: CustomBiddingScriptStateEnum;
}
