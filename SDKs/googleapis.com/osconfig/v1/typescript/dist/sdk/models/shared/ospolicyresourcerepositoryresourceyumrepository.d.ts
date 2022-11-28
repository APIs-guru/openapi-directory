import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a single yum package repository. These are added to a repo file that is managed at `/etc/yum.repos.d/google_osconfig.repo`.
**/
export declare class OsPolicyResourceRepositoryResourceYumRepository extends SpeakeasyBase {
    baseUrl?: string;
    displayName?: string;
    gpgKeys?: string[];
    id?: string;
}
