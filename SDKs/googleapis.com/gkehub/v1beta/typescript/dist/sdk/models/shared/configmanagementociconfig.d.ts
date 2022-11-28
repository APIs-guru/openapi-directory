import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OCI repo configuration for a single cluster
**/
export declare class ConfigManagementOciConfig extends SpeakeasyBase {
    gcpServiceAccountEmail?: string;
    policyDir?: string;
    secretType?: string;
    syncRepo?: string;
    syncWaitSecs?: string;
}
