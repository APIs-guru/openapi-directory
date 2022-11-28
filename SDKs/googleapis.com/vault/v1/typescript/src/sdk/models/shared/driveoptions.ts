import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DriveOptionsClientSideEncryptedOptionEnum {
    ClientSideEncryptedOptionUnspecified = "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED",
    ClientSideEncryptedOptionAny = "CLIENT_SIDE_ENCRYPTED_OPTION_ANY",
    ClientSideEncryptedOptionEncrypted = "CLIENT_SIDE_ENCRYPTED_OPTION_ENCRYPTED",
    ClientSideEncryptedOptionUnencrypted = "CLIENT_SIDE_ENCRYPTED_OPTION_UNENCRYPTED"
}


// DriveOptions
/** 
 * Additional options for Drive search
**/
export class DriveOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientSideEncryptedOption" })
  clientSideEncryptedOption?: DriveOptionsClientSideEncryptedOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=includeSharedDrives" })
  includeSharedDrives?: boolean;

  @SpeakeasyMetadata({ data: "json, name=includeTeamDrives" })
  includeTeamDrives?: boolean;

  @SpeakeasyMetadata({ data: "json, name=versionDate" })
  versionDate?: string;
}
