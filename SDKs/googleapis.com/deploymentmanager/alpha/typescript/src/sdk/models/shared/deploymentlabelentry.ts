import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeploymentLabelEntry
/** 
 * Label object for Deployments
**/
export class DeploymentLabelEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
