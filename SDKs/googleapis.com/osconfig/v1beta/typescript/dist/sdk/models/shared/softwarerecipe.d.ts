import { SpeakeasyBase } from "../../../internal/utils";
import { SoftwareRecipeArtifact } from "./softwarerecipeartifact";
import { SoftwareRecipeStep } from "./softwarerecipestep";
export declare enum SoftwareRecipeDesiredStateEnum {
    DesiredStateUnspecified = "DESIRED_STATE_UNSPECIFIED",
    Installed = "INSTALLED",
    Updated = "UPDATED",
    Removed = "REMOVED"
}
/**
 * A software recipe is a set of instructions for installing and configuring a piece of software. It consists of a set of artifacts that are downloaded, and a set of steps that install, configure, and/or update the software. Recipes support installing and updating software from artifacts in the following formats: Zip archive, Tar archive, Windows MSI, Debian package, and RPM package. Additionally, recipes support executing a script (either defined in a file or directly in this api) in bash, sh, cmd, and powershell. Updating a software recipe If a recipe is assigned to an instance and there is a recipe with the same name but a lower version already installed and the assigned state of the recipe is `UPDATED`, then the recipe is updated to the new version. Script Working Directories Each script or execution step is run in its own temporary directory which is deleted after completing the step.
**/
export declare class SoftwareRecipe extends SpeakeasyBase {
    artifacts?: SoftwareRecipeArtifact[];
    desiredState?: SoftwareRecipeDesiredStateEnum;
    installSteps?: SoftwareRecipeStep[];
    name?: string;
    updateSteps?: SoftwareRecipeStep[];
    version?: string;
}
