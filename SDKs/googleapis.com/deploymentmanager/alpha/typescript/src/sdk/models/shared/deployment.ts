import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Credential } from "./credential";
import { DeploymentLabelEntry } from "./deploymentlabelentry";
import { Operation } from "./operation";
import { DeploymentOutputEntry } from "./deploymentoutputentry";
import { TargetConfiguration } from "./targetconfiguration";
import { DeploymentUpdate } from "./deploymentupdate";


export class Deployment extends SpeakeasyBase {
  @Metadata({ data: "json, name=credential" })
  credential?: Credential;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=insertTime" })
  insertTime?: string;

  @Metadata({ data: "json, name=labels", elemType: shared.DeploymentLabelEntry })
  labels?: DeploymentLabelEntry[];

  @Metadata({ data: "json, name=manifest" })
  manifest?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=operation" })
  operation?: Operation;

  @Metadata({ data: "json, name=outputs", elemType: shared.DeploymentOutputEntry })
  outputs?: DeploymentOutputEntry[];

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=target" })
  target?: TargetConfiguration;

  @Metadata({ data: "json, name=update" })
  update?: DeploymentUpdate;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
