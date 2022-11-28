import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies roles and/or permissions to analyze, to determine both the identities possessing them and the resources they control. If multiple values are specified, results will include identities and resources matching any of them. The total number of roles and permissions should be equal or less than 10.
**/
export declare class AccessSelector extends SpeakeasyBase {
    permissions?: string[];
    roles?: string[];
}
