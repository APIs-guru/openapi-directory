import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateUserByName
/** 
 * The create user by name request body.
**/
export class CreateUserByName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Password" })
  password?: string;
}
