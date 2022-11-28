import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a single zypper package repository. These are added to a repo file that is managed at `/etc/zypp/repos.d/google_osconfig.repo`.
**/
export declare class OsPolicyResourceRepositoryResourceZypperRepository extends SpeakeasyBase {
    baseUrl?: string;
    displayName?: string;
    gpgKeys?: string[];
    id?: string;
}
