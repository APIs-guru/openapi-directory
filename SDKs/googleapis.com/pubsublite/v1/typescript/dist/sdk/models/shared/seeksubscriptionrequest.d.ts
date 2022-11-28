import { SpeakeasyBase } from "../../../internal/utils";
import { TimeTarget } from "./timetarget";
export declare enum SeekSubscriptionRequestNamedTargetEnum {
    NamedTargetUnspecified = "NAMED_TARGET_UNSPECIFIED",
    Tail = "TAIL",
    Head = "HEAD"
}
/**
 * Request for SeekSubscription.
**/
export declare class SeekSubscriptionRequest extends SpeakeasyBase {
    namedTarget?: SeekSubscriptionRequestNamedTargetEnum;
    timeTarget?: TimeTarget;
}
