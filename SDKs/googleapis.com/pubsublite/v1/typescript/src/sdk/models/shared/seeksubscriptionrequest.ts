import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TimeTarget } from "./timetarget";


export enum SeekSubscriptionRequestNamedTargetEnum {
    NamedTargetUnspecified = "NAMED_TARGET_UNSPECIFIED",
    Tail = "TAIL",
    Head = "HEAD"
}


// SeekSubscriptionRequest
/** 
 * Request for SeekSubscription.
**/
export class SeekSubscriptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=namedTarget" })
  namedTarget?: SeekSubscriptionRequestNamedTargetEnum;

  @SpeakeasyMetadata({ data: "json, name=timeTarget" })
  timeTarget?: TimeTarget;
}
