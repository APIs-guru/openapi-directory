import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a reference to atag that fires before another tag in order to set up dependencies.
**/
export declare class SetupTag extends SpeakeasyBase {
    stopOnSetupFailure?: boolean;
    tagName?: string;
}
