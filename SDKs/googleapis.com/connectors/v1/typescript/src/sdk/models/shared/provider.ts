import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProviderLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED",
    Preview = "PREVIEW",
    Ga = "GA",
    Deprecated = "DEPRECATED"
}


// Provider
/** 
 * Provider indicates the owner who provides the connectors.
**/
export class Provider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=documentationUri" })
  documentationUri?: string;

  @SpeakeasyMetadata({ data: "json, name=externalUri" })
  externalUri?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=launchStage" })
  launchStage?: ProviderLaunchStageEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=webAssetsLocation" })
  webAssetsLocation?: string;
}
