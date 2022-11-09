import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Impersonation } from "./impersonation";
import { SystemEvent } from "./systemevent";
import { User } from "./user";


// Actor
/** 
 * The actor of a Drive activity.
**/
export class Actor extends SpeakeasyBase {
  @Metadata({ data: "json, name=administrator" })
  administrator?: Map<string, any>;

  @Metadata({ data: "json, name=anonymous" })
  anonymous?: Map<string, any>;

  @Metadata({ data: "json, name=impersonation" })
  impersonation?: Impersonation;

  @Metadata({ data: "json, name=system" })
  system?: SystemEvent;

  @Metadata({ data: "json, name=user" })
  user?: User;
}
