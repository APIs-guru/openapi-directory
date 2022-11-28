import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SoftwareRecipeStepInstallMsi
/** 
 * Installs an MSI file.
**/
export class SoftwareRecipeStepInstallMsi extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedExitCodes" })
  allowedExitCodes?: number[];

  @SpeakeasyMetadata({ data: "json, name=artifactId" })
  artifactId?: string;

  @SpeakeasyMetadata({ data: "json, name=flags" })
  flags?: string[];
}
