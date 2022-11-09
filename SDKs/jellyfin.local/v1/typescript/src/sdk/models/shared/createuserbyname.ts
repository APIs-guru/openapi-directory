import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateUserByName
/** 
 * The create user by name request body.
**/
export class CreateUserByName extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Password" })
  password?: string;
}
