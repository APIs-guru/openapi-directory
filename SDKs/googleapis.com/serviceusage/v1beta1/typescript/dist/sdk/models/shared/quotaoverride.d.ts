import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A quota override
**/
export declare class QuotaOverride extends SpeakeasyBase {
    adminOverrideAncestor?: string;
    dimensions?: Map<string, string>;
    metric?: string;
    name?: string;
    overrideValue?: string;
    unit?: string;
}
