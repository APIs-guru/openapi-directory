import { SpeakeasyBase } from "../../../internal/utils";
import { DynamicLinkInfo } from "./dynamiclinkinfo";
import { Suffix } from "./suffix";
/**
 * Request to create a managed Short Dynamic Link.
**/
export declare class CreateManagedShortLinkRequest extends SpeakeasyBase {
    dynamicLinkInfo?: DynamicLinkInfo;
    longDynamicLink?: string;
    name?: string;
    sdkVersion?: string;
    suffix?: Suffix;
}
