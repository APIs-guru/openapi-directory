import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SoftwareRecipeStepInstallRpm
/** 
 * Installs an rpm file via the rpm utility.
**/
export class SoftwareRecipeStepInstallRpm extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifactId" })
  artifactId?: string;
}
