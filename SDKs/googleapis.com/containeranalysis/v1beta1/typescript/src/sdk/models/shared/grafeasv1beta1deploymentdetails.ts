import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Deployment } from "./deployment";


// GrafeasV1beta1DeploymentDetails
/** 
 * Details of a deployment occurrence.
**/
export class GrafeasV1beta1DeploymentDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=deployment" })
  deployment?: Deployment;
}
