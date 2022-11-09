import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProviderLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED"
,    Preview = "PREVIEW"
,    Ga = "GA"
,    Deprecated = "DEPRECATED"
}


// Provider
/** 
 * Provider indicates the owner who provides the connectors.
**/
export class Provider extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=documentationUri" })
  documentationUri?: string;

  @Metadata({ data: "json, name=externalUri" })
  externalUri?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=launchStage" })
  launchStage?: ProviderLaunchStageEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=webAssetsLocation" })
  webAssetsLocation?: string;
}
