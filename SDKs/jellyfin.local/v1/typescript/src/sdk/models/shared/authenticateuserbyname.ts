import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuthenticateUserByName
/** 
 * The authenticate user by name request body.
**/
export class AuthenticateUserByName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=Pw" })
  pw?: string;

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username?: string;
}
