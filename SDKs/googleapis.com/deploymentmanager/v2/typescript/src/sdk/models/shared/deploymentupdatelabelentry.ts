import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeploymentUpdateLabelEntry
/** 
 * Label object for DeploymentUpdate
**/
export class DeploymentUpdateLabelEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
