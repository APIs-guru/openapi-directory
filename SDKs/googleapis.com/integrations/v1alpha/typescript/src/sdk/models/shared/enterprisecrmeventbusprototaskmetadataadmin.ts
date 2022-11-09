import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnterpriseCrmEventbusProtoTaskMetadataAdmin
/** 
 * Admins are owners of a Task, and have all permissions on a particular task identified by the task name. By default, Eventbus periodically scans all task metadata and syncs (adds) any new admins defined here to Zanzibar.
**/
export class EnterpriseCrmEventbusProtoTaskMetadataAdmin extends SpeakeasyBase {
  @Metadata({ data: "json, name=googleGroupEmail" })
  googleGroupEmail?: string;

  @Metadata({ data: "json, name=userEmail" })
  userEmail?: string;
}
