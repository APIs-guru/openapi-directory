import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutomaticStatus } from "./automaticstatus";
import { UserManagedStatus } from "./usermanagedstatus";



// ReplicationStatus
/** 
 * The replication status of a SecretVersion.
**/
export class ReplicationStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=automatic" })
  automatic?: AutomaticStatus;

  @SpeakeasyMetadata({ data: "json, name=userManaged" })
  userManaged?: UserManagedStatus;
}
