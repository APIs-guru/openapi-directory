import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeploymentConfig } from "./deploymentconfig";
import { EntryPoint } from "./entrypoint";


// Deployment
/** 
 * Representation of a single script deployment.
**/
export class Deployment extends SpeakeasyBase {
  @Metadata({ data: "json, name=deploymentConfig" })
  deploymentConfig?: DeploymentConfig;

  @Metadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @Metadata({ data: "json, name=entryPoints", elemType: shared.EntryPoint })
  entryPoints?: EntryPoint[];

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
