import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResetAdminPasswordResponse
/** 
 * Response message for ResetAdminPassword
**/
export class ResetAdminPasswordResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;
}
