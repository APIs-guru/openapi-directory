import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeploymentOutputEntry
/** 
 * Output object for Deployments
**/
export class DeploymentOutputEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
