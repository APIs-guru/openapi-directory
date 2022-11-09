import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Config } from "./config";

export enum WebSecurityScannerSettingsServiceEnablementStateEnum {
    EnablementStateUnspecified = "ENABLEMENT_STATE_UNSPECIFIED"
,    Inherited = "INHERITED"
,    Enabled = "ENABLED"
,    Disabled = "DISABLED"
}


// WebSecurityScannerSettings
/** 
 * Resource capturing the settings for the Web Security Scanner service.
**/
export class WebSecurityScannerSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=modules", elemType: shared.Config })
  modules?: Map<string, Config>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=serviceEnablementState" })
  serviceEnablementState?: WebSecurityScannerSettingsServiceEnablementStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
