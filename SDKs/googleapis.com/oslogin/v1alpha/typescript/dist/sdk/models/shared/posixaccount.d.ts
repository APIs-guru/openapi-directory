import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PosixAccountOperatingSystemTypeEnum {
    OperatingSystemTypeUnspecified = "OPERATING_SYSTEM_TYPE_UNSPECIFIED",
    Linux = "LINUX",
    Windows = "WINDOWS"
}
/**
 * The POSIX account information associated with a Google account.
**/
export declare class PosixAccount extends SpeakeasyBase {
    accountId?: string;
    gecos?: string;
    gid?: string;
    homeDirectory?: string;
    name?: string;
    operatingSystemType?: PosixAccountOperatingSystemTypeEnum;
    primary?: boolean;
    shell?: string;
    systemId?: string;
    uid?: string;
    username?: string;
}
