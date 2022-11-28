import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SoftwareRecipeStepInstallDpkg
/** 
 * Installs a deb via dpkg.
**/
export class SoftwareRecipeStepInstallDpkg extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifactId" })
  artifactId?: string;
}
