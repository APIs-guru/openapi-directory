import { SpeakeasyBase } from "../../../internal/utils";
import { Locale } from "./locale";
import { Orientation } from "./orientation";
/**
 * iOS configuration that can be selected at the time a test is run.
**/
export declare class IosRuntimeConfiguration extends SpeakeasyBase {
    locales?: Locale[];
    orientations?: Orientation[];
}
