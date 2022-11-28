import { SpeakeasyBase } from "../../../internal/utils";
import { SoftwareRecipeStepExtractArchive } from "./softwarerecipestepextractarchive";
import { SoftwareRecipeStepInstallDpkg } from "./softwarerecipestepinstalldpkg";
import { SoftwareRecipeStepCopyFile } from "./softwarerecipestepcopyfile";
import { SoftwareRecipeStepExecFile } from "./softwarerecipestepexecfile";
import { SoftwareRecipeStepInstallMsi } from "./softwarerecipestepinstallmsi";
import { SoftwareRecipeStepInstallRpm } from "./softwarerecipestepinstallrpm";
import { SoftwareRecipeStepRunScript } from "./softwarerecipesteprunscript";
/**
 * An action that can be taken as part of installing or updating a recipe.
**/
export declare class SoftwareRecipeStep extends SpeakeasyBase {
    archiveExtraction?: SoftwareRecipeStepExtractArchive;
    dpkgInstallation?: SoftwareRecipeStepInstallDpkg;
    fileCopy?: SoftwareRecipeStepCopyFile;
    fileExec?: SoftwareRecipeStepExecFile;
    msiInstallation?: SoftwareRecipeStepInstallMsi;
    rpmInstallation?: SoftwareRecipeStepInstallRpm;
    scriptRun?: SoftwareRecipeStepRunScript;
}
