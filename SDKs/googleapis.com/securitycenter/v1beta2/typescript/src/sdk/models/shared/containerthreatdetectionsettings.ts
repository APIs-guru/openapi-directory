import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Config } from "./config";


export enum ContainerThreatDetectionSettingsServiceEnablementStateEnum {
    EnablementStateUnspecified = "ENABLEMENT_STATE_UNSPECIFIED",
    Inherited = "INHERITED",
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}


// ContainerThreatDetectionSettings
/** 
 * Resource capturing the settings for the Container Threat Detection service.
**/
export class ContainerThreatDetectionSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=modules", elemType: Config })
  modules?: Map<string, Config>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceEnablementState" })
  serviceEnablementState?: ContainerThreatDetectionSettingsServiceEnablementStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// ContainerThreatDetectionSettingsInput
/** 
 * Resource capturing the settings for the Container Threat Detection service.
**/
export class ContainerThreatDetectionSettingsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=modules", elemType: Config })
  modules?: Map<string, Config>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceEnablementState" })
  serviceEnablementState?: ContainerThreatDetectionSettingsServiceEnablementStateEnum;
}
