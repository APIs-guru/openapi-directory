import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProviderLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED",
    Preview = "PREVIEW",
    Ga = "GA",
    Deprecated = "DEPRECATED"
}
/**
 * Provider indicates the owner who provides the connectors.
**/
export declare class Provider extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    displayName?: string;
    documentationUri?: string;
    externalUri?: string;
    labels?: Map<string, string>;
    launchStage?: ProviderLaunchStageEnum;
    name?: string;
    updateTime?: string;
    webAssetsLocation?: string;
}
