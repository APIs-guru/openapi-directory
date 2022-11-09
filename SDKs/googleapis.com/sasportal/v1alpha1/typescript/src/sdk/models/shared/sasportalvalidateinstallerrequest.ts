import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SasPortalValidateInstallerRequest
/** 
 * Request for ValidateInstaller.
**/
export class SasPortalValidateInstallerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=encodedSecret" })
  encodedSecret?: string;

  @Metadata({ data: "json, name=installerId" })
  installerId?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;
}
