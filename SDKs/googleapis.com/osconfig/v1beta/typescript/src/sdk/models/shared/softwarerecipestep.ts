import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=archiveExtraction" })
  archiveExtraction?: SoftwareRecipeStepExtractArchive;

  @SpeakeasyMetadata({ data: "json, name=dpkgInstallation" })
  dpkgInstallation?: SoftwareRecipeStepInstallDpkg;

  @SpeakeasyMetadata({ data: "json, name=fileCopy" })
  fileCopy?: SoftwareRecipeStepCopyFile;

  @SpeakeasyMetadata({ data: "json, name=fileExec" })
  fileExec?: SoftwareRecipeStepExecFile;

  @SpeakeasyMetadata({ data: "json, name=msiInstallation" })
  msiInstallation?: SoftwareRecipeStepInstallMsi;

  @SpeakeasyMetadata({ data: "json, name=rpmInstallation" })
  rpmInstallation?: SoftwareRecipeStepInstallRpm;

  @SpeakeasyMetadata({ data: "json, name=scriptRun" })
  scriptRun?: SoftwareRecipeStepRunScript;
}
