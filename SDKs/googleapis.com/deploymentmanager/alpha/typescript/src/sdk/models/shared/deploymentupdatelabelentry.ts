import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeploymentUpdateLabelEntry
/** 
 * Label object for DeploymentUpdate
**/
export class DeploymentUpdateLabelEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
