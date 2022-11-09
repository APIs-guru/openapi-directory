import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoginProfile } from "./loginprofile";


// ImportSshPublicKeyResponse
/** 
 * A response message for importing an SSH public key.
**/
export class ImportSshPublicKeyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=loginProfile" })
  loginProfile?: LoginProfile;
}
