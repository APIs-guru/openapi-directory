import { SpeakeasyBase } from "../../../internal/utils";
import { CloudSqlConfig } from "./cloudsqlconfig";
import { GoogleCloudServicenetworkingV1ConsumerConfigReservedRange } from "./googlecloudservicenetworkingv1consumerconfigreservedrange";
/**
 * Configuration information for a private service access connection.
**/
export declare class ConsumerConfigInput extends SpeakeasyBase {
    cloudsqlConfigs?: CloudSqlConfig[];
    consumerExportCustomRoutes?: boolean;
    consumerExportSubnetRoutesWithPublicIp?: boolean;
    consumerImportCustomRoutes?: boolean;
    consumerImportSubnetRoutesWithPublicIp?: boolean;
    producerExportCustomRoutes?: boolean;
    producerExportSubnetRoutesWithPublicIp?: boolean;
    producerImportCustomRoutes?: boolean;
    producerImportSubnetRoutesWithPublicIp?: boolean;
}
/**
 * Configuration information for a private service access connection.
**/
export declare class ConsumerConfig extends SpeakeasyBase {
    cloudsqlConfigs?: CloudSqlConfig[];
    consumerExportCustomRoutes?: boolean;
    consumerExportSubnetRoutesWithPublicIp?: boolean;
    consumerImportCustomRoutes?: boolean;
    consumerImportSubnetRoutesWithPublicIp?: boolean;
    producerExportCustomRoutes?: boolean;
    producerExportSubnetRoutesWithPublicIp?: boolean;
    producerImportCustomRoutes?: boolean;
    producerImportSubnetRoutesWithPublicIp?: boolean;
    producerNetwork?: string;
    reservedRanges?: GoogleCloudServicenetworkingV1ConsumerConfigReservedRange[];
    usedIpRanges?: string[];
    vpcScReferenceArchitectureEnabled?: boolean;
}
