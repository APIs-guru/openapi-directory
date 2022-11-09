import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeTarget } from "./timetarget";

export enum SeekSubscriptionRequestNamedTargetEnum {
    NamedTargetUnspecified = "NAMED_TARGET_UNSPECIFIED"
,    Tail = "TAIL"
,    Head = "HEAD"
}


// SeekSubscriptionRequest
/** 
 * Request for SeekSubscription.
**/
export class SeekSubscriptionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=namedTarget" })
  namedTarget?: SeekSubscriptionRequestNamedTargetEnum;

  @Metadata({ data: "json, name=timeTarget" })
  timeTarget?: TimeTarget;
}
