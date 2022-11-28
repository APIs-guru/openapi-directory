import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeploymentConfig } from "./deploymentconfig";
import { EntryPoint } from "./entrypoint";



// Deployment
/** 
 * Representation of a single script deployment.
**/
export class Deployment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deploymentConfig" })
  deploymentConfig?: DeploymentConfig;

  @SpeakeasyMetadata({ data: "json, name=deploymentId" })
  deploymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=entryPoints", elemType: EntryPoint })
  entryPoints?: EntryPoint[];

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
