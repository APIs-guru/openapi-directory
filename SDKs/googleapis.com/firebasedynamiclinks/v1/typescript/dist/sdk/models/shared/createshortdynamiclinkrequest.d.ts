import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DynamicLinkInfo } from "./dynamiclinkinfo";
import { Suffix } from "./suffix";
/**
 * Request to create a short Dynamic Link.
**/
export declare class CreateShortDynamicLinkRequest extends SpeakeasyBase {
    dynamicLinkInfo?: DynamicLinkInfo;
    longDynamicLink?: string;
    sdkVersion?: string;
    suffix?: Suffix;
}
