import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuthConfigTemplate } from "./authconfigtemplate";
import { ConfigVariableTemplate } from "./configvariabletemplate";
import { EgressControlConfig } from "./egresscontrolconfig";
import { RoleGrant } from "./rolegrant";
import { RoleGrant } from "./rolegrant";
import { SupportedRuntimeFeatures } from "./supportedruntimefeatures";

export enum ConnectorVersionLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED"
,    Preview = "PREVIEW"
,    Ga = "GA"
,    Deprecated = "DEPRECATED"
}


// ConnectorVersion
/** 
 * ConnectorVersion indicates a specific version of a connector.
**/
export class ConnectorVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=authConfigTemplates", elemType: shared.AuthConfigTemplate })
  authConfigTemplates?: AuthConfigTemplate[];

  @Metadata({ data: "json, name=configVariableTemplates", elemType: shared.ConfigVariableTemplate })
  configVariableTemplates?: ConfigVariableTemplate[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=egressControlConfig" })
  egressControlConfig?: EgressControlConfig;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=launchStage" })
  launchStage?: ConnectorVersionLaunchStageEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=releaseVersion" })
  releaseVersion?: string;

  @Metadata({ data: "json, name=roleGrant" })
  roleGrant?: RoleGrant;

  @Metadata({ data: "json, name=roleGrants", elemType: shared.RoleGrant })
  roleGrants?: RoleGrant[];

  @Metadata({ data: "json, name=supportedRuntimeFeatures" })
  supportedRuntimeFeatures?: SupportedRuntimeFeatures;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
