import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Push contains filter properties for matching GitHub git pushes.
**/
export declare class PushFilter extends SpeakeasyBase {
    branch?: string;
    invertRegex?: boolean;
    tag?: string;
}
