import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AuthenticateUserByName
/** 
 * The authenticate user by name request body.
**/
export class AuthenticateUserByName extends SpeakeasyBase {
  @Metadata({ data: "json, name=Password" })
  password?: string;

  @Metadata({ data: "json, name=Pw" })
  pw?: string;

  @Metadata({ data: "json, name=Username" })
  username?: string;
}
