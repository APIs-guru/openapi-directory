import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Admins are owners of a Task, and have all permissions on a particular task identified by the task name. By default, Eventbus periodically scans all task metadata and syncs (adds) any new admins defined here to Zanzibar.
**/
export declare class EnterpriseCrmEventbusProtoTaskMetadataAdmin extends SpeakeasyBase {
    googleGroupEmail?: string;
    userEmail?: string;
}
