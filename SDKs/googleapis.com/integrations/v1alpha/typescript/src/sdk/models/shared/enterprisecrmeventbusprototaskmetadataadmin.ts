import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnterpriseCrmEventbusProtoTaskMetadataAdmin
/** 
 * Admins are owners of a Task, and have all permissions on a particular task identified by the task name. By default, Eventbus periodically scans all task metadata and syncs (adds) any new admins defined here to Zanzibar.
**/
export class EnterpriseCrmEventbusProtoTaskMetadataAdmin extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=googleGroupEmail" })
  googleGroupEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=userEmail" })
  userEmail?: string;
}
