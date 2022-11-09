import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DriveOptionsClientSideEncryptedOptionEnum {
    ClientSideEncryptedOptionUnspecified = "CLIENT_SIDE_ENCRYPTED_OPTION_UNSPECIFIED"
,    ClientSideEncryptedOptionAny = "CLIENT_SIDE_ENCRYPTED_OPTION_ANY"
,    ClientSideEncryptedOptionEncrypted = "CLIENT_SIDE_ENCRYPTED_OPTION_ENCRYPTED"
,    ClientSideEncryptedOptionUnencrypted = "CLIENT_SIDE_ENCRYPTED_OPTION_UNENCRYPTED"
}


// DriveOptions
/** 
 * Additional options for Drive search
**/
export class DriveOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientSideEncryptedOption" })
  clientSideEncryptedOption?: DriveOptionsClientSideEncryptedOptionEnum;

  @Metadata({ data: "json, name=includeSharedDrives" })
  includeSharedDrives?: boolean;

  @Metadata({ data: "json, name=includeTeamDrives" })
  includeTeamDrives?: boolean;

  @Metadata({ data: "json, name=versionDate" })
  versionDate?: string;
}
