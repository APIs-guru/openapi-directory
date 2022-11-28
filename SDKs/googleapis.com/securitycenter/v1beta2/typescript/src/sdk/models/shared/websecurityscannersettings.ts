import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Config } from "./config";


export enum WebSecurityScannerSettingsServiceEnablementStateEnum {
    EnablementStateUnspecified = "ENABLEMENT_STATE_UNSPECIFIED",
    Inherited = "INHERITED",
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}


// WebSecurityScannerSettings
/** 
 * Resource capturing the settings for the Web Security Scanner service.
**/
export class WebSecurityScannerSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=modules", elemType: Config })
  modules?: Map<string, Config>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceEnablementState" })
  serviceEnablementState?: WebSecurityScannerSettingsServiceEnablementStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
