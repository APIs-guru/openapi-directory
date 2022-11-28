import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// User
/** 
 * A User on your Account. Unrestricted users can log in and access information about your Account, while restricted users may only access entities or perform actions they've been granted access to.
 * 
**/
export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=restricted" })
  restricted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ssh_keys" })
  sshKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=tfa_enabled" })
  tfaEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}


// UserInput
/** 
 * A User on your Account. Unrestricted users can log in and access information about your Account, while restricted users may only access entities or perform actions they've been granted access to.
 * 
**/
export class UserInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=restricted" })
  restricted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ssh_keys" })
  sshKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
