import { SpeakeasyBase } from "../../../internal/utils";
import { TimeInterval } from "./timeinterval";
/**
 * All the information pertaining to an event featured in a local post.
**/
export declare class LocalPostEvent extends SpeakeasyBase {
    schedule?: TimeInterval;
    title?: string;
}
