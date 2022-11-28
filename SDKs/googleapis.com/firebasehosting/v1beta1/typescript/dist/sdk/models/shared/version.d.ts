import { SpeakeasyBase } from "../../../internal/utils";
import { ServingConfig } from "./servingconfig";
import { ActingUser } from "./actinguser";
export declare enum VersionStatusEnum {
    VersionStatusUnspecified = "VERSION_STATUS_UNSPECIFIED",
    Created = "CREATED",
    Finalized = "FINALIZED",
    Deleted = "DELETED",
    Abandoned = "ABANDONED",
    Expired = "EXPIRED",
    Cloning = "CLONING"
}
/**
 * A `Version` is a configuration and a collection of static files which determine how a site is displayed.
**/
export declare class Version extends SpeakeasyBase {
    config?: ServingConfig;
    createTime?: string;
    createUser?: ActingUser;
    deleteTime?: string;
    deleteUser?: ActingUser;
    fileCount?: string;
    finalizeTime?: string;
    finalizeUser?: ActingUser;
    labels?: Map<string, string>;
    name?: string;
    status?: VersionStatusEnum;
    versionBytes?: string;
}
