import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Impersonation } from "./impersonation";
import { SystemEvent } from "./systemevent";
import { User } from "./user";



// Actor
/** 
 * The actor of a Drive activity.
**/
export class Actor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=administrator" })
  administrator?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=anonymous" })
  anonymous?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=impersonation" })
  impersonation?: Impersonation;

  @SpeakeasyMetadata({ data: "json, name=system" })
  system?: SystemEvent;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: User;
}
