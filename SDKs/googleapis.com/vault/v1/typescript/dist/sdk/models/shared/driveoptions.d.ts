import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DriveOptionsClientSideEncryptedOptionEnum {
    ClientSideEncryptedOptionUnspecified = "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
    ClientSideEncryptedOptionAny = "CLIENT_SIDE_ENCRYPTED_OPTION_ANY",
    ClientSideEncryptedOptionEncrypted = "CLIENT_SIDE_ENCRYPTED_OPTION_ENCRYPTED",
    ClientSideEncryptedOptionUnencrypted = "CLIENT_SIDE_ENCRYPTED_OPTION_UNENCRYPTED"
}
/**
 * Additional options for Drive search
**/
export declare class DriveOptions extends SpeakeasyBase {
    clientSideEncryptedOption?: DriveOptionsClientSideEncryptedOptionEnum;
    includeSharedDrives?: boolean;
    includeTeamDrives?: boolean;
    versionDate?: string;
}
