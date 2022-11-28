import { SpeakeasyBase } from "../../../internal/utils";
import { ActingUser } from "./actinguser";
import { Version } from "./version";
export declare enum ReleaseTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Deploy = "DEPLOY",
    Rollback = "ROLLBACK",
    SiteDisable = "SITE_DISABLE"
}
/**
 *  A `Release` is a particular [collection of configurations and files](sites.versions) that is set to be public at a particular time.
**/
export declare class Release extends SpeakeasyBase {
    message?: string;
    name?: string;
    releaseTime?: string;
    releaseUser?: ActingUser;
    type?: ReleaseTypeEnum;
    version?: Version;
}
