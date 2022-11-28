import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleAppsScriptTypeAddOnEntryPointAddOnTypeEnum {
    UnknownAddonType = "UNKNOWN_ADDON_TYPE",
    Gmail = "GMAIL",
    DataStudio = "DATA_STUDIO"
}


// GoogleAppsScriptTypeAddOnEntryPoint
/** 
 * An add-on entry point.
**/
export class GoogleAppsScriptTypeAddOnEntryPoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addOnType" })
  addOnType?: GoogleAppsScriptTypeAddOnEntryPointAddOnTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=helpUrl" })
  helpUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=postInstallTipUrl" })
  postInstallTipUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=reportIssueUrl" })
  reportIssueUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
