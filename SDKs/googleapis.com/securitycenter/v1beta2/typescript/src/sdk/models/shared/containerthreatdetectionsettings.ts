import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Config } from "./config";

export enum ContainerThreatDetectionSettingsServiceEnablementStateEnum {
    EnablementStateUnspecified = "ENABLEMENT_STATE_UNSPECIFIED"
,    Inherited = "INHERITED"
,    Enabled = "ENABLED"
,    Disabled = "DISABLED"
}


// ContainerThreatDetectionSettings
/** 
 * Resource capturing the settings for the Container Threat Detection service.
**/
export class ContainerThreatDetectionSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=modules", elemType: shared.Config })
  modules?: Map<string, Config>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=serviceEnablementState" })
  serviceEnablementState?: ContainerThreatDetectionSettingsServiceEnablementStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
