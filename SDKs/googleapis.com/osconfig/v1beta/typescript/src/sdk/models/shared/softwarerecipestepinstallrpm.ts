import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SoftwareRecipeStepInstallRpm
/** 
 * Installs an rpm file via the rpm utility.
**/
export class SoftwareRecipeStepInstallRpm extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifactId" })
  artifactId?: string;
}
