import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork
/** 
 * Cloud VPC Network used to run the infrastructure.
**/
export class GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=networkTags" })
  networkTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=subNetwork" })
  subNetwork?: string;
}
