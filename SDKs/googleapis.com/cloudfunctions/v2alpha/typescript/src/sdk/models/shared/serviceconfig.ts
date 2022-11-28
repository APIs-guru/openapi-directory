import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SecretEnvVar } from "./secretenvvar";
import { SecretVolume } from "./secretvolume";


export enum ServiceConfigIngressSettingsEnum {
    IngressSettingsUnspecified = "INGRESS_SETTINGS_UNSPECIFIED",
    AllowAll = "ALLOW_ALL",
    AllowInternalOnly = "ALLOW_INTERNAL_ONLY",
    AllowInternalAndGclb = "ALLOW_INTERNAL_AND_GCLB"
}

export enum ServiceConfigSecurityLevelEnum {
    SecurityLevelUnspecified = "SECURITY_LEVEL_UNSPECIFIED",
    SecureAlways = "SECURE_ALWAYS",
    SecureOptional = "SECURE_OPTIONAL"
}

export enum ServiceConfigVpcConnectorEgressSettingsEnum {
    VpcConnectorEgressSettingsUnspecified = "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED",
    PrivateRangesOnly = "PRIVATE_RANGES_ONLY",
    AllTraffic = "ALL_TRAFFIC"
}


// ServiceConfig
/** 
 * Describes the Service being deployed. Currently Supported : Cloud Run (fully managed). Next tag: 23
**/
export class ServiceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allTrafficOnLatestRevision" })
  allTrafficOnLatestRevision?: boolean;

  @SpeakeasyMetadata({ data: "json, name=availableMemory" })
  availableMemory?: string;

  @SpeakeasyMetadata({ data: "json, name=environmentVariables" })
  environmentVariables?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ingressSettings" })
  ingressSettings?: ServiceConfigIngressSettingsEnum;

  @SpeakeasyMetadata({ data: "json, name=maxInstanceCount" })
  maxInstanceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=minInstanceCount" })
  minInstanceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: string;

  @SpeakeasyMetadata({ data: "json, name=secretEnvironmentVariables", elemType: SecretEnvVar })
  secretEnvironmentVariables?: SecretEnvVar[];

  @SpeakeasyMetadata({ data: "json, name=secretVolumes", elemType: SecretVolume })
  secretVolumes?: SecretVolume[];

  @SpeakeasyMetadata({ data: "json, name=securityLevel" })
  securityLevel?: ServiceConfigSecurityLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccountEmail" })
  serviceAccountEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=timeoutSeconds" })
  timeoutSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=vpcConnector" })
  vpcConnector?: string;

  @SpeakeasyMetadata({ data: "json, name=vpcConnectorEgressSettings" })
  vpcConnectorEgressSettings?: ServiceConfigVpcConnectorEgressSettingsEnum;
}


// ServiceConfigInput
/** 
 * Describes the Service being deployed. Currently Supported : Cloud Run (fully managed). Next tag: 23
**/
export class ServiceConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allTrafficOnLatestRevision" })
  allTrafficOnLatestRevision?: boolean;

  @SpeakeasyMetadata({ data: "json, name=availableMemory" })
  availableMemory?: string;

  @SpeakeasyMetadata({ data: "json, name=environmentVariables" })
  environmentVariables?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ingressSettings" })
  ingressSettings?: ServiceConfigIngressSettingsEnum;

  @SpeakeasyMetadata({ data: "json, name=maxInstanceCount" })
  maxInstanceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=minInstanceCount" })
  minInstanceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=secretEnvironmentVariables", elemType: SecretEnvVar })
  secretEnvironmentVariables?: SecretEnvVar[];

  @SpeakeasyMetadata({ data: "json, name=secretVolumes", elemType: SecretVolume })
  secretVolumes?: SecretVolume[];

  @SpeakeasyMetadata({ data: "json, name=securityLevel" })
  securityLevel?: ServiceConfigSecurityLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=serviceAccountEmail" })
  serviceAccountEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=timeoutSeconds" })
  timeoutSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=vpcConnector" })
  vpcConnector?: string;

  @SpeakeasyMetadata({ data: "json, name=vpcConnectorEgressSettings" })
  vpcConnectorEgressSettings?: ServiceConfigVpcConnectorEgressSettingsEnum;
}
