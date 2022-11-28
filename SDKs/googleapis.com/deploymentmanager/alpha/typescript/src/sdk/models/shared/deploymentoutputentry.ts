import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeploymentOutputEntry
/** 
 * Output object for Deployments
**/
export class DeploymentOutputEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
