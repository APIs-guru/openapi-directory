import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a single Zypper package repository. This repository is added to a repo file that is stored at `/etc/zypp/repos.d/google_osconfig.repo`.
**/
export declare class ZypperRepository extends SpeakeasyBase {
    baseUrl?: string;
    displayName?: string;
    gpgKeys?: string[];
    id?: string;
}
