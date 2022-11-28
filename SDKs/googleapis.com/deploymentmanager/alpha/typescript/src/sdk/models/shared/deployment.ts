import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Credential } from "./credential";
import { DeploymentLabelEntry } from "./deploymentlabelentry";
import { Operation } from "./operation";
import { DeploymentOutputEntry } from "./deploymentoutputentry";
import { TargetConfiguration } from "./targetconfiguration";
import { DeploymentUpdate } from "./deploymentupdate";



export class Deployment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=credential" })
  credential?: Credential;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=insertTime" })
  insertTime?: string;

  @SpeakeasyMetadata({ data: "json, name=labels", elemType: DeploymentLabelEntry })
  labels?: DeploymentLabelEntry[];

  @SpeakeasyMetadata({ data: "json, name=manifest" })
  manifest?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=operation" })
  operation?: Operation;

  @SpeakeasyMetadata({ data: "json, name=outputs", elemType: DeploymentOutputEntry })
  outputs?: DeploymentOutputEntry[];

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: TargetConfiguration;

  @SpeakeasyMetadata({ data: "json, name=update" })
  update?: DeploymentUpdate;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
