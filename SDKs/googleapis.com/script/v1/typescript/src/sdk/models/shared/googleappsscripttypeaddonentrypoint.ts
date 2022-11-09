import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleAppsScriptTypeAddOnEntryPointAddOnTypeEnum {
    UnknownAddonType = "UNKNOWN_ADDON_TYPE"
,    Gmail = "GMAIL"
,    DataStudio = "DATA_STUDIO"
}


// GoogleAppsScriptTypeAddOnEntryPoint
/** 
 * An add-on entry point.
**/
export class GoogleAppsScriptTypeAddOnEntryPoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=addOnType" })
  addOnType?: GoogleAppsScriptTypeAddOnEntryPointAddOnTypeEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=helpUrl" })
  helpUrl?: string;

  @Metadata({ data: "json, name=postInstallTipUrl" })
  postInstallTipUrl?: string;

  @Metadata({ data: "json, name=reportIssueUrl" })
  reportIssueUrl?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
