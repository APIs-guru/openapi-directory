import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomBiddingScriptRef } from "./custombiddingscriptref";
import { ScriptError } from "./scripterror";


export enum CustomBiddingScriptStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Accepted = "ACCEPTED",
    Rejected = "REJECTED",
    Pending = "PENDING"
}


// CustomBiddingScriptInput
/** 
 * A single custom bidding script.
**/
export class CustomBiddingScriptInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: CustomBiddingScriptRef;
}


// CustomBiddingScript
/** 
 * A single custom bidding script.
**/
export class CustomBiddingScript extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=customBiddingAlgorithmId" })
  customBiddingAlgorithmId?: string;

  @SpeakeasyMetadata({ data: "json, name=customBiddingScriptId" })
  customBiddingScriptId?: string;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ScriptError })
  errors?: ScriptError[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: CustomBiddingScriptRef;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: CustomBiddingScriptStateEnum;
}
