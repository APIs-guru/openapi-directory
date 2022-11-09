import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SecretEnvVar } from "./secretenvvar";
import { SecretVolume } from "./secretvolume";

export enum ServiceConfigIngressSettingsEnum {
    IngressSettingsUnspecified = "INGRESS_SETTINGS_UNSPECIFIED"
,    AllowAll = "ALLOW_ALL"
,    AllowInternalOnly = "ALLOW_INTERNAL_ONLY"
,    AllowInternalAndGclb = "ALLOW_INTERNAL_AND_GCLB"
}

export enum ServiceConfigVpcConnectorEgressSettingsEnum {
    VpcConnectorEgressSettingsUnspecified = "VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED"
,    PrivateRangesOnly = "PRIVATE_RANGES_ONLY"
,    AllTraffic = "ALL_TRAFFIC"
}


// ServiceConfig
/** 
 * Describes the Service being deployed. Currently Supported : Cloud Run (fully managed).
**/
export class ServiceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=allTrafficOnLatestRevision" })
  allTrafficOnLatestRevision?: boolean;

  @Metadata({ data: "json, name=availableMemory" })
  availableMemory?: string;

  @Metadata({ data: "json, name=environmentVariables" })
  environmentVariables?: Map<string, string>;

  @Metadata({ data: "json, name=ingressSettings" })
  ingressSettings?: ServiceConfigIngressSettingsEnum;

  @Metadata({ data: "json, name=maxInstanceCount" })
  maxInstanceCount?: number;

  @Metadata({ data: "json, name=minInstanceCount" })
  minInstanceCount?: number;

  @Metadata({ data: "json, name=revision" })
  revision?: string;

  @Metadata({ data: "json, name=secretEnvironmentVariables", elemType: shared.SecretEnvVar })
  secretEnvironmentVariables?: SecretEnvVar[];

  @Metadata({ data: "json, name=secretVolumes", elemType: shared.SecretVolume })
  secretVolumes?: SecretVolume[];

  @Metadata({ data: "json, name=service" })
  service?: string;

  @Metadata({ data: "json, name=serviceAccountEmail" })
  serviceAccountEmail?: string;

  @Metadata({ data: "json, name=timeoutSeconds" })
  timeoutSeconds?: number;

  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=vpcConnector" })
  vpcConnector?: string;

  @Metadata({ data: "json, name=vpcConnectorEgressSettings" })
  vpcConnectorEgressSettings?: ServiceConfigVpcConnectorEgressSettingsEnum;
}
