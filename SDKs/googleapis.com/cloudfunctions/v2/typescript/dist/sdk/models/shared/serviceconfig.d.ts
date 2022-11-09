import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SecretEnvVar } from "./secretenvvar";
import { SecretVolume } from "./secretvolume";
export declare enum ServiceConfigIngressSettingsEnum {
    IngressSettingsUnspecified = "INGRESS_SETTINGS_UNSPECIFIED",
    AllowAll = "ALLOW_ALL",
    AllowInternalOnly = "ALLOW_INTERNAL_ONLY",
    AllowInternalAndGclb = "ALLOW_INTERNAL_AND_GCLB"
}
export declare enum ServiceConfigVpcConnectorEgressSettingsEnum {
    VpcConnectorEgressSettingsUnspecified = "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED",
    PrivateRangesOnly = "PRIVATE_RANGES_ONLY",
    AllTraffic = "ALL_TRAFFIC"
}
/**
 * Describes the Service being deployed. Currently Supported : Cloud Run (fully managed).
**/
export declare class ServiceConfig extends SpeakeasyBase {
    allTrafficOnLatestRevision?: boolean;
    availableMemory?: string;
    environmentVariables?: Map<string, string>;
    ingressSettings?: ServiceConfigIngressSettingsEnum;
    maxInstanceCount?: number;
    minInstanceCount?: number;
    revision?: string;
    secretEnvironmentVariables?: SecretEnvVar[];
    secretVolumes?: SecretVolume[];
    service?: string;
    serviceAccountEmail?: string;
    timeoutSeconds?: number;
    uri?: string;
    vpcConnector?: string;
    vpcConnectorEgressSettings?: ServiceConfigVpcConnectorEgressSettingsEnum;
}
