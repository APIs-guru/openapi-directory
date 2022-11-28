import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRunV2VpcAccessEgressEnum {
    VpcEgressUnspecified = "VPC_EGRESS_UNSPECIFIED",
    AllTraffic = "ALL_TRAFFIC",
    PrivateRangesOnly = "PRIVATE_RANGES_ONLY"
}


// GoogleCloudRunV2VpcAccess
/** 
 * VPC Access settings. For more information on creating a VPC Connector, visit https://cloud.google.com/vpc/docs/configure-serverless-vpc-access For information on how to configure Cloud Run with an existing VPC Connector, visit https://cloud.google.com/run/docs/configuring/connecting-vpc
**/
export class GoogleCloudRunV2VpcAccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connector" })
  connector?: string;

  @SpeakeasyMetadata({ data: "json, name=egress" })
  egress?: GoogleCloudRunV2VpcAccessEgressEnum;
}
