import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Admin } from "./admin";


// ListLocationAdminsResponse
/** 
 * Response message for AccessControl.ListLocationAdmins.
**/
export class ListLocationAdminsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=admins", elemType: shared.Admin })
  admins?: Admin[];
}
