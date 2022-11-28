import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserManaged } from "./usermanaged";



// Replication
/** 
 * A policy that defines the replication configuration of data.
**/
export class Replication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=automatic" })
  automatic?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=userManaged" })
  userManaged?: UserManaged;
}
