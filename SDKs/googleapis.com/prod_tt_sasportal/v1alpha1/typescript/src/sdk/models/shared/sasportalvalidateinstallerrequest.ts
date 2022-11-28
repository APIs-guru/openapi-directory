import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SasPortalValidateInstallerRequest
/** 
 * Request for ValidateInstaller.
**/
export class SasPortalValidateInstallerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=encodedSecret" })
  encodedSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=installerId" })
  installerId?: string;

  @SpeakeasyMetadata({ data: "json, name=secret" })
  secret?: string;
}
