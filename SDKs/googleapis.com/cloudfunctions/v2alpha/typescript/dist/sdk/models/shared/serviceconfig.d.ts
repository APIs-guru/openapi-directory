import { SpeakeasyBase } from "../../../internal/utils";
import { SecretEnvVar } from "./secretenvvar";
import { SecretVolume } from "./secretvolume";
export declare enum ServiceConfigIngressSettingsEnum {
    IngressSettingsUnspecified = "INGRESS_SETTINGS_UNSPECIFIED",
    AllowAll = "ALLOW_ALL",
    AllowInternalOnly = "ALLOW_INTERNAL_ONLY",
    AllowInternalAndGclb = "ALLOW_INTERNAL_AND_GCLB"
}
export declare enum ServiceConfigSecurityLevelEnum {
    SecurityLevelUnspecified = "SECURITY_LEVEL_UNSPECIFIED",
    SecureAlways = "SECURE_ALWAYS",
    SecureOptional = "SECURE_OPTIONAL"
}
export declare enum ServiceConfigVpcConnectorEgressSettingsEnum {
    VpcConnectorEgressSettingsUnspecified = "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED",
    PrivateRangesOnly = "PRIVATE_RANGES_ONLY",
    AllTraffic = "ALL_TRAFFIC"
}
/**
 * Describes the Service being deployed. Currently Supported : Cloud Run (fully managed). Next tag: 23
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
    securityLevel?: ServiceConfigSecurityLevelEnum;
    service?: string;
    serviceAccountEmail?: string;
    timeoutSeconds?: number;
    uri?: string;
    vpcConnector?: string;
    vpcConnectorEgressSettings?: ServiceConfigVpcConnectorEgressSettingsEnum;
}
/**
 * Describes the Service being deployed. Currently Supported : Cloud Run (fully managed). Next tag: 23
**/
export declare class ServiceConfigInput extends SpeakeasyBase {
    allTrafficOnLatestRevision?: boolean;
    availableMemory?: string;
    environmentVariables?: Map<string, string>;
    ingressSettings?: ServiceConfigIngressSettingsEnum;
    maxInstanceCount?: number;
    minInstanceCount?: number;
    secretEnvironmentVariables?: SecretEnvVar[];
    secretVolumes?: SecretVolume[];
    securityLevel?: ServiceConfigSecurityLevelEnum;
    serviceAccountEmail?: string;
    timeoutSeconds?: number;
    vpcConnector?: string;
    vpcConnectorEgressSettings?: ServiceConfigVpcConnectorEgressSettingsEnum;
}
