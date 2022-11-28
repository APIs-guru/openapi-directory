import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identity related configuration, including service account based secure multi-tenancy user mappings.
**/
export declare class IdentityConfig extends SpeakeasyBase {
    userServiceAccountMapping?: Map<string, string>;
}
