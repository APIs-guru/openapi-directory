import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRunV2VpcAccessEgressEnum {
    VpcEgressUnspecified = "VPC_EGRESS_UNSPECIFIED",
    AllTraffic = "ALL_TRAFFIC",
    PrivateRangesOnly = "PRIVATE_RANGES_ONLY"
}
/**
 * VPC Access settings. For more information on creating a VPC Connector, visit https://cloud.google.com/vpc/docs/configure-serverless-vpc-access For information on how to configure Cloud Run with an existing VPC Connector, visit https://cloud.google.com/run/docs/configuring/connecting-vpc
**/
export declare class GoogleCloudRunV2VpcAccess extends SpeakeasyBase {
    connector?: string;
    egress?: GoogleCloudRunV2VpcAccessEgressEnum;
}
