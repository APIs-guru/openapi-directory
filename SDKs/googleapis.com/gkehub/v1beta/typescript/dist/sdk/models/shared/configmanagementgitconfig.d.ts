import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Git repo configuration for a single cluster.
**/
export declare class ConfigManagementGitConfig extends SpeakeasyBase {
    gcpServiceAccountEmail?: string;
    httpsProxy?: string;
    policyDir?: string;
    secretType?: string;
    syncBranch?: string;
    syncRepo?: string;
    syncRev?: string;
    syncWaitSecs?: string;
}
