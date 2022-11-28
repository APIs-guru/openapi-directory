import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Admin } from "./admin";



// ListLocationAdminsResponse
/** 
 * Response message for AccessControl.ListLocationAdmins.
**/
export class ListLocationAdminsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admins", elemType: Admin })
  admins?: Admin[];
}
