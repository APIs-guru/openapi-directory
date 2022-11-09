import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConfigManagementInstallError
/** 
 * Errors pertaining to the installation of ACM
**/
export class ConfigManagementInstallError extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;
}
