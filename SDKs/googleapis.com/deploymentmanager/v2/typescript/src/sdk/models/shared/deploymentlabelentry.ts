import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeploymentLabelEntry
/** 
 * Label object for Deployments
**/
export class DeploymentLabelEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
