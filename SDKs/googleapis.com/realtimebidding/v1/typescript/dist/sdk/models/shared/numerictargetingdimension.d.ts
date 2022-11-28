import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Generic targeting used for targeting dimensions that contain a list of included and excluded numeric IDs used in app, user list, geo, and vertical id targeting.
**/
export declare class NumericTargetingDimension extends SpeakeasyBase {
    excludedIds?: string[];
    includedIds?: string[];
}
