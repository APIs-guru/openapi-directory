import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConfigManagementInstallError
/** 
 * Errors pertaining to the installation of ACM
**/
export class ConfigManagementInstallError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;
}
