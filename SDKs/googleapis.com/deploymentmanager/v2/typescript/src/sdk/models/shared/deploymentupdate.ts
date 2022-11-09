import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeploymentUpdateLabelEntry } from "./deploymentupdatelabelentry";


export class DeploymentUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=labels", elemType: shared.DeploymentUpdateLabelEntry })
  labels?: DeploymentUpdateLabelEntry[];

  @Metadata({ data: "json, name=manifest" })
  manifest?: string;
}
