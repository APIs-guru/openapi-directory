import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SoftwareRecipeArtifact } from "./softwarerecipeartifact";
import { SoftwareRecipeStep } from "./softwarerecipestep";


export enum SoftwareRecipeDesiredStateEnum {
    DesiredStateUnspecified = "DESIRED_STATE_UNSPECIFIED",
    Installed = "INSTALLED",
    Updated = "UPDATED",
    Removed = "REMOVED"
}


// SoftwareRecipe
/** 
 * A software recipe is a set of instructions for installing and configuring a piece of software. It consists of a set of artifacts that are downloaded, and a set of steps that install, configure, and/or update the software. Recipes support installing and updating software from artifacts in the following formats: Zip archive, Tar archive, Windows MSI, Debian package, and RPM package. Additionally, recipes support executing a script (either defined in a file or directly in this api) in bash, sh, cmd, and powershell. Updating a software recipe If a recipe is assigned to an instance and there is a recipe with the same name but a lower version already installed and the assigned state of the recipe is `UPDATED`, then the recipe is updated to the new version. Script Working Directories Each script or execution step is run in its own temporary directory which is deleted after completing the step.
**/
export class SoftwareRecipe extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifacts", elemType: SoftwareRecipeArtifact })
  artifacts?: SoftwareRecipeArtifact[];

  @SpeakeasyMetadata({ data: "json, name=desiredState" })
  desiredState?: SoftwareRecipeDesiredStateEnum;

  @SpeakeasyMetadata({ data: "json, name=installSteps", elemType: SoftwareRecipeStep })
  installSteps?: SoftwareRecipeStep[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updateSteps", elemType: SoftwareRecipeStep })
  updateSteps?: SoftwareRecipeStep[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
