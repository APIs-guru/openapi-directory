import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthConfigTemplate } from "./authconfigtemplate";
import { ConfigVariableTemplate } from "./configvariabletemplate";
import { EgressControlConfig } from "./egresscontrolconfig";
import { RoleGrant } from "./rolegrant";
import { SupportedRuntimeFeatures } from "./supportedruntimefeatures";


export enum ConnectorVersionLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED",
    Preview = "PREVIEW",
    Ga = "GA",
    Deprecated = "DEPRECATED"
}


// ConnectorVersion
/** 
 * ConnectorVersion indicates a specific version of a connector.
**/
export class ConnectorVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authConfigTemplates", elemType: AuthConfigTemplate })
  authConfigTemplates?: AuthConfigTemplate[];

  @SpeakeasyMetadata({ data: "json, name=configVariableTemplates", elemType: ConfigVariableTemplate })
  configVariableTemplates?: ConfigVariableTemplate[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=egressControlConfig" })
  egressControlConfig?: EgressControlConfig;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=launchStage" })
  launchStage?: ConnectorVersionLaunchStageEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=releaseVersion" })
  releaseVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=roleGrant" })
  roleGrant?: RoleGrant;

  @SpeakeasyMetadata({ data: "json, name=roleGrants", elemType: RoleGrant })
  roleGrants?: RoleGrant[];

  @SpeakeasyMetadata({ data: "json, name=supportedRuntimeFeatures" })
  supportedRuntimeFeatures?: SupportedRuntimeFeatures;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
