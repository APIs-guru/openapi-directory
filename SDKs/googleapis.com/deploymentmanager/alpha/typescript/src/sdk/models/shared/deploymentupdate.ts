import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Credential } from "./credential";
import { DeploymentUpdateLabelEntry } from "./deploymentupdatelabelentry";



export class DeploymentUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=credential" })
  credential?: Credential;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels", elemType: DeploymentUpdateLabelEntry })
  labels?: DeploymentUpdateLabelEntry[];

  @SpeakeasyMetadata({ data: "json, name=manifest" })
  manifest?: string;
}
