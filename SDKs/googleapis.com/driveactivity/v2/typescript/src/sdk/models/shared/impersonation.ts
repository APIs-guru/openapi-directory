import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { User } from "./user";


// Impersonation
/** 
 * Information about an impersonation, where an admin acts on behalf of an end user. Information about the acting admin is not currently available.
**/
export class Impersonation extends SpeakeasyBase {
  @Metadata({ data: "json, name=impersonatedUser" })
  impersonatedUser?: User;
}
