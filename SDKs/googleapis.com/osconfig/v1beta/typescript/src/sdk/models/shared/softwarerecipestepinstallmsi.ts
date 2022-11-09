import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SoftwareRecipeStepInstallMsi
/** 
 * Installs an MSI file.
**/
export class SoftwareRecipeStepInstallMsi extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedExitCodes" })
  allowedExitCodes?: number[];

  @Metadata({ data: "json, name=artifactId" })
  artifactId?: string;

  @Metadata({ data: "json, name=flags" })
  flags?: string[];
}
