import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork
/** 
 * Cloud VPC Network used to run the infrastructure.
**/
export class GoogleCloudDataplexV1TaskInfrastructureSpecVpcNetwork extends SpeakeasyBase {
  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=networkTags" })
  networkTags?: string[];

  @Metadata({ data: "json, name=subNetwork" })
  subNetwork?: string;
}
