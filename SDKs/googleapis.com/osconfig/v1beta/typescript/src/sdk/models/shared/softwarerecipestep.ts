import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SoftwareRecipeStepExtractArchive } from "./softwarerecipestepextractarchive";
import { SoftwareRecipeStepInstallDpkg } from "./softwarerecipestepinstalldpkg";
import { SoftwareRecipeStepCopyFile } from "./softwarerecipestepcopyfile";
import { SoftwareRecipeStepExecFile } from "./softwarerecipestepexecfile";
import { SoftwareRecipeStepInstallMsi } from "./softwarerecipestepinstallmsi";
import { SoftwareRecipeStepInstallRpm } from "./softwarerecipestepinstallrpm";
import { SoftwareRecipeStepRunScript } from "./softwarerecipesteprunscript";


// SoftwareRecipeStep
/** 
 * An action that can be taken as part of installing or updating a recipe.
**/
export class SoftwareRecipeStep extends SpeakeasyBase {
  @Metadata({ data: "json, name=archiveExtraction" })
  archiveExtraction?: SoftwareRecipeStepExtractArchive;

  @Metadata({ data: "json, name=dpkgInstallation" })
  dpkgInstallation?: SoftwareRecipeStepInstallDpkg;

  @Metadata({ data: "json, name=fileCopy" })
  fileCopy?: SoftwareRecipeStepCopyFile;

  @Metadata({ data: "json, name=fileExec" })
  fileExec?: SoftwareRecipeStepExecFile;

  @Metadata({ data: "json, name=msiInstallation" })
  msiInstallation?: SoftwareRecipeStepInstallMsi;

  @Metadata({ data: "json, name=rpmInstallation" })
  rpmInstallation?: SoftwareRecipeStepInstallRpm;

  @Metadata({ data: "json, name=scriptRun" })
  scriptRun?: SoftwareRecipeStepRunScript;
}
