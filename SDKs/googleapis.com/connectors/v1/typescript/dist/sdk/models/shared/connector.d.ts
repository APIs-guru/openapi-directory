import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ConnectorLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED",
    Preview = "PREVIEW",
    Ga = "GA",
    Deprecated = "DEPRECATED"
}
/**
 * Connectors indicates a specific connector type, e.x. Salesforce, SAP etc.
**/
export declare class Connector extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    displayName?: string;
    documentationUri?: string;
    externalUri?: string;
    labels?: Map<string, string>;
    launchStage?: ConnectorLaunchStageEnum;
    name?: string;
    updateTime?: string;
    webAssetsLocation?: string;
}
