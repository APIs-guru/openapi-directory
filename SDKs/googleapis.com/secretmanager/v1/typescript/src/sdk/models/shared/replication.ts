import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Automatic } from "./automatic";
import { UserManaged } from "./usermanaged";



// Replication
/** 
 * A policy that defines the replication and encryption configuration of data.
**/
export class Replication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=automatic" })
  automatic?: Automatic;

  @SpeakeasyMetadata({ data: "json, name=userManaged" })
  userManaged?: UserManaged;
}
