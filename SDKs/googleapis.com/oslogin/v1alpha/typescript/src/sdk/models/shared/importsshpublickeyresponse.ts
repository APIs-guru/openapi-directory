import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoginProfile } from "./loginprofile";



// ImportSshPublicKeyResponse
/** 
 * A response message for importing an SSH public key.
**/
export class ImportSshPublicKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=loginProfile" })
  loginProfile?: LoginProfile;
}
