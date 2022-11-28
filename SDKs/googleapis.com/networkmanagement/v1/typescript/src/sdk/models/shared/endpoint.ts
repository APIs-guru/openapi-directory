import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudFunctionEndpoint } from "./cloudfunctionendpoint";


export enum EndpointNetworkTypeEnum {
    NetworkTypeUnspecified = "NETWORK_TYPE_UNSPECIFIED",
    GcpNetwork = "GCP_NETWORK",
    NonGcpNetwork = "NON_GCP_NETWORK"
}


// Endpoint
/** 
 * Source or destination of the Connectivity Test.
**/
export class Endpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudFunction" })
  cloudFunction?: CloudFunctionEndpoint;

  @SpeakeasyMetadata({ data: "json, name=cloudSqlInstance" })
  cloudSqlInstance?: string;

  @SpeakeasyMetadata({ data: "json, name=gkeMasterCluster" })
  gkeMasterCluster?: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance?: string;

  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=networkType" })
  networkType?: EndpointNetworkTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;
}
