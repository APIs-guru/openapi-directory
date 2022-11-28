import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a tag that fires after another tag in order to tear down dependencies.
**/
export declare class TeardownTag extends SpeakeasyBase {
    stopTeardownOnFailure?: boolean;
    tagName?: string;
}
