import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudSqlConfig } from "./cloudsqlconfig";
import { GoogleCloudServicenetworkingV1ConsumerConfigReservedRange } from "./googlecloudservicenetworkingv1consumerconfigreservedrange";



// ConsumerConfigInput
/** 
 * Configuration information for a private service access connection.
**/
export class ConsumerConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudsqlConfigs", elemType: CloudSqlConfig })
  cloudsqlConfigs?: CloudSqlConfig[];

  @SpeakeasyMetadata({ data: "json, name=consumerExportCustomRoutes" })
  consumerExportCustomRoutes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=consumerExportSubnetRoutesWithPublicIp" })
  consumerExportSubnetRoutesWithPublicIp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=consumerImportCustomRoutes" })
  consumerImportCustomRoutes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=consumerImportSubnetRoutesWithPublicIp" })
  consumerImportSubnetRoutesWithPublicIp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=producerExportCustomRoutes" })
  producerExportCustomRoutes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=producerExportSubnetRoutesWithPublicIp" })
  producerExportSubnetRoutesWithPublicIp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=producerImportCustomRoutes" })
  producerImportCustomRoutes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=producerImportSubnetRoutesWithPublicIp" })
  producerImportSubnetRoutesWithPublicIp?: boolean;
}


// ConsumerConfig
/** 
 * Configuration information for a private service access connection.
**/
export class ConsumerConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudsqlConfigs", elemType: CloudSqlConfig })
  cloudsqlConfigs?: CloudSqlConfig[];

  @SpeakeasyMetadata({ data: "json, name=consumerExportCustomRoutes" })
  consumerExportCustomRoutes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=consumerExportSubnetRoutesWithPublicIp" })
  consumerExportSubnetRoutesWithPublicIp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=consumerImportCustomRoutes" })
  consumerImportCustomRoutes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=consumerImportSubnetRoutesWithPublicIp" })
  consumerImportSubnetRoutesWithPublicIp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=producerExportCustomRoutes" })
  producerExportCustomRoutes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=producerExportSubnetRoutesWithPublicIp" })
  producerExportSubnetRoutesWithPublicIp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=producerImportCustomRoutes" })
  producerImportCustomRoutes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=producerImportSubnetRoutesWithPublicIp" })
  producerImportSubnetRoutesWithPublicIp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=producerNetwork" })
  producerNetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=reservedRanges", elemType: GoogleCloudServicenetworkingV1ConsumerConfigReservedRange })
  reservedRanges?: GoogleCloudServicenetworkingV1ConsumerConfigReservedRange[];

  @SpeakeasyMetadata({ data: "json, name=usedIpRanges" })
  usedIpRanges?: string[];

  @SpeakeasyMetadata({ data: "json, name=vpcScReferenceArchitectureEnabled" })
  vpcScReferenceArchitectureEnabled?: boolean;
}
