import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResetAdminPasswordResponse
/** 
 * Response message for ResetAdminPassword
**/
export class ResetAdminPasswordResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password?: string;
}
