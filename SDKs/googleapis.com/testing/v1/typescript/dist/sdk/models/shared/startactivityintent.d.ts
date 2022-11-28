import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A starting intent specified by an action, uri, and categories.
**/
export declare class StartActivityIntent extends SpeakeasyBase {
    action?: string;
    categories?: string[];
    uri?: string;
}
