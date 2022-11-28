import { SpeakeasyBase } from "../../../internal/utils";
import { AuthConfigTemplate } from "./authconfigtemplate";
import { ConfigVariableTemplate } from "./configvariabletemplate";
import { EgressControlConfig } from "./egresscontrolconfig";
import { RoleGrant } from "./rolegrant";
import { SupportedRuntimeFeatures } from "./supportedruntimefeatures";
export declare enum ConnectorVersionLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED",
    Preview = "PREVIEW",
    Ga = "GA",
    Deprecated = "DEPRECATED"
}
/**
 * ConnectorVersion indicates a specific version of a connector.
**/
export declare class ConnectorVersion extends SpeakeasyBase {
    authConfigTemplates?: AuthConfigTemplate[];
    configVariableTemplates?: ConfigVariableTemplate[];
    createTime?: string;
    displayName?: string;
    egressControlConfig?: EgressControlConfig;
    labels?: Map<string, string>;
    launchStage?: ConnectorVersionLaunchStageEnum;
    name?: string;
    releaseVersion?: string;
    roleGrant?: RoleGrant;
    roleGrants?: RoleGrant[];
    supportedRuntimeFeatures?: SupportedRuntimeFeatures;
    updateTime?: string;
}
