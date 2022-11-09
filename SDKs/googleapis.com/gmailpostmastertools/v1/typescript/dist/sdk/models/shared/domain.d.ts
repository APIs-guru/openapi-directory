import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum DomainPermissionEnum {
    PermissionUnspecified = "PERMISSION_UNSPECIFIED",
    Owner = "OWNER",
    Reader = "READER",
    None = "NONE"
}
/**
 * A registered domain resource in the Postmaster API.
**/
export declare class Domain extends SpeakeasyBase {
    createTime?: string;
    name?: string;
    permission?: DomainPermissionEnum;
}
