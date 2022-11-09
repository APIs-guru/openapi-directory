import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// User
/** 
 * A User on your Account. Unrestricted users can log in and access information about your Account, while restricted users may only access entities or perform actions they've been granted access to.
 * 
**/
export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=restricted" })
  restricted?: boolean;

  @Metadata({ data: "json, name=ssh_keys" })
  sshKeys?: string[];

  @Metadata({ data: "json, name=tfa_enabled" })
  tfaEnabled?: boolean;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
