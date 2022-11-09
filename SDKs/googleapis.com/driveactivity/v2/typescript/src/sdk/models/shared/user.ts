import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KnownUser } from "./knownuser";


// User
/** 
 * Information about an end user.
**/
export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=deletedUser" })
  deletedUser?: Map<string, any>;

  @Metadata({ data: "json, name=knownUser" })
  knownUser?: KnownUser;

  @Metadata({ data: "json, name=unknownUser" })
  unknownUser?: Map<string, any>;
}
