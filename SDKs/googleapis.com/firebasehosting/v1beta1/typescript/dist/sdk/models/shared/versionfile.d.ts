import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VersionFileStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Expected = "EXPECTED",
    Active = "ACTIVE"
}
/**
 * A static content file that is part of a version.
**/
export declare class VersionFile extends SpeakeasyBase {
    hash?: string;
    path?: string;
    status?: VersionFileStatusEnum;
}
