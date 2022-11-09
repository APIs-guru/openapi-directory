import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudFunctionEndpoint } from "./cloudfunctionendpoint";

export enum EndpointNetworkTypeEnum {
    NetworkTypeUnspecified = "NETWORK_TYPE_UNSPECIFIED"
,    GcpNetwork = "GCP_NETWORK"
,    NonGcpNetwork = "NON_GCP_NETWORK"
}


// Endpoint
/** 
 * Source or destination of the Connectivity Test.
**/
export class Endpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudFunction" })
  cloudFunction?: CloudFunctionEndpoint;

  @Metadata({ data: "json, name=cloudSqlInstance" })
  cloudSqlInstance?: string;

  @Metadata({ data: "json, name=gkeMasterCluster" })
  gkeMasterCluster?: string;

  @Metadata({ data: "json, name=instance" })
  instance?: string;

  @Metadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=networkType" })
  networkType?: EndpointNetworkTypeEnum;

  @Metadata({ data: "json, name=port" })
  port?: number;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;
}
