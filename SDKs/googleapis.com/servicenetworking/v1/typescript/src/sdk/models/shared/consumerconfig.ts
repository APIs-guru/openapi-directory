import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CloudSqlConfig } from "./cloudsqlconfig";
import { GoogleCloudServicenetworkingV1ConsumerConfigReservedRange } from "./googlecloudservicenetworkingv1consumerconfigreservedrange";


// ConsumerConfig
/** 
 * Configuration information for a private service access connection.
**/
export class ConsumerConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudsqlConfigs", elemType: shared.CloudSqlConfig })
  cloudsqlConfigs?: CloudSqlConfig[];

  @Metadata({ data: "json, name=consumerExportCustomRoutes" })
  consumerExportCustomRoutes?: boolean;

  @Metadata({ data: "json, name=consumerExportSubnetRoutesWithPublicIp" })
  consumerExportSubnetRoutesWithPublicIp?: boolean;

  @Metadata({ data: "json, name=consumerImportCustomRoutes" })
  consumerImportCustomRoutes?: boolean;

  @Metadata({ data: "json, name=consumerImportSubnetRoutesWithPublicIp" })
  consumerImportSubnetRoutesWithPublicIp?: boolean;

  @Metadata({ data: "json, name=producerExportCustomRoutes" })
  producerExportCustomRoutes?: boolean;

  @Metadata({ data: "json, name=producerExportSubnetRoutesWithPublicIp" })
  producerExportSubnetRoutesWithPublicIp?: boolean;

  @Metadata({ data: "json, name=producerImportCustomRoutes" })
  producerImportCustomRoutes?: boolean;

  @Metadata({ data: "json, name=producerImportSubnetRoutesWithPublicIp" })
  producerImportSubnetRoutesWithPublicIp?: boolean;

  @Metadata({ data: "json, name=producerNetwork" })
  producerNetwork?: string;

  @Metadata({ data: "json, name=reservedRanges", elemType: shared.GoogleCloudServicenetworkingV1ConsumerConfigReservedRange })
  reservedRanges?: GoogleCloudServicenetworkingV1ConsumerConfigReservedRange[];

  @Metadata({ data: "json, name=usedIpRanges" })
  usedIpRanges?: string[];

  @Metadata({ data: "json, name=vpcScReferenceArchitectureEnabled" })
  vpcScReferenceArchitectureEnabled?: boolean;
}
