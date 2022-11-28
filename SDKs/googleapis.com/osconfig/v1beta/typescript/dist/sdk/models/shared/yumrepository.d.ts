import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a single Yum package repository. This repository is added to a repo file that is stored at `/etc/yum.repos.d/google_osconfig.repo`.
**/
export declare class YumRepository extends SpeakeasyBase {
    baseUrl?: string;
    displayName?: string;
    gpgKeys?: string[];
    id?: string;
}
