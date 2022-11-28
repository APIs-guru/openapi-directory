import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Deployment } from "./deployment";



// GrafeasV1beta1DeploymentDetails
/** 
 * Details of a deployment occurrence.
**/
export class GrafeasV1beta1DeploymentDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deployment" })
  deployment?: Deployment;
}
