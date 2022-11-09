import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Automatic } from "./automatic";
import { UserManaged } from "./usermanaged";


// Replication
/** 
 * A policy that defines the replication and encryption configuration of data.
**/
export class Replication extends SpeakeasyBase {
  @Metadata({ data: "json, name=automatic" })
  automatic?: Automatic;

  @Metadata({ data: "json, name=userManaged" })
  userManaged?: UserManaged;
}
