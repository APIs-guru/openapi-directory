import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserManaged } from "./usermanaged";


// Replication
/** 
 * A policy that defines the replication configuration of data.
**/
export class Replication extends SpeakeasyBase {
  @Metadata({ data: "json, name=automatic" })
  automatic?: Map<string, any>;

  @Metadata({ data: "json, name=userManaged" })
  userManaged?: UserManaged;
}
