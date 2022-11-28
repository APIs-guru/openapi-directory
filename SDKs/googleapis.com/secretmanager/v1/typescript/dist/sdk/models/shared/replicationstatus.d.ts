import { SpeakeasyBase } from "../../../internal/utils";
import { AutomaticStatus } from "./automaticstatus";
import { UserManagedStatus } from "./usermanagedstatus";
/**
 * The replication status of a SecretVersion.
**/
export declare class ReplicationStatus extends SpeakeasyBase {
    automatic?: AutomaticStatus;
    userManaged?: UserManagedStatus;
}
