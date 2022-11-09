import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PosixAccountOperatingSystemTypeEnum {
    OperatingSystemTypeUnspecified = "OPERATING_SYSTEM_TYPE_UNSPECIFIED"
,    Linux = "LINUX"
,    Windows = "WINDOWS"
}


// PosixAccount
/** 
 * The POSIX account information associated with a Google account.
**/
export class PosixAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=gecos" })
  gecos?: string;

  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=homeDirectory" })
  homeDirectory?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=operatingSystemType" })
  operatingSystemType?: PosixAccountOperatingSystemTypeEnum;

  @Metadata({ data: "json, name=primary" })
  primary?: boolean;

  @Metadata({ data: "json, name=shell" })
  shell?: string;

  @Metadata({ data: "json, name=systemId" })
  systemId?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
