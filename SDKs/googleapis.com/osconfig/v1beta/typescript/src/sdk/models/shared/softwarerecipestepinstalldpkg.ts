import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SoftwareRecipeStepInstallDpkg
/** 
 * Installs a deb via dpkg.
**/
export class SoftwareRecipeStepInstallDpkg extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifactId" })
  artifactId?: string;
}
