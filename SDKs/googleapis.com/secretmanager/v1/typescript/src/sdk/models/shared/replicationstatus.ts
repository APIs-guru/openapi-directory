import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutomaticStatus } from "./automaticstatus";
import { UserManagedStatus } from "./usermanagedstatus";


// ReplicationStatus
/** 
 * The replication status of a SecretVersion.
**/
export class ReplicationStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=automatic" })
  automatic?: AutomaticStatus;

  @Metadata({ data: "json, name=userManaged" })
  userManaged?: UserManagedStatus;
}
