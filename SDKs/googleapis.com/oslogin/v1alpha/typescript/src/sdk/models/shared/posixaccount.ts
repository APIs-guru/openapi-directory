import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PosixAccountOperatingSystemTypeEnum {
    OperatingSystemTypeUnspecified = "OPERATING_SYSTEM_TYPE_UNSPECIFIED",
    Linux = "LINUX",
    Windows = "WINDOWS"
}


// PosixAccount
/** 
 * The POSIX account information associated with a Google account.
**/
export class PosixAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=gecos" })
  gecos?: string;

  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=homeDirectory" })
  homeDirectory?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=operatingSystemType" })
  operatingSystemType?: PosixAccountOperatingSystemTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=shell" })
  shell?: string;

  @SpeakeasyMetadata({ data: "json, name=systemId" })
  systemId?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
