import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GlobalConfig } from "./globalconfig";
import { Canary } from "./canary";
import { ExposedApi } from "./exposedapi";
import { ChaosConfig } from "./chaosconfig";
import { ClientConfig } from "./clientconfig";
import { CorsSettings } from "./corssettings";
import { Gzip } from "./gzip";
import { HealthCheck } from "./healthcheck";
import { IpFiltering } from "./ipfiltering";
import { LocalJwtVerifier } from "./localjwtverifier";
import { RefJwtVerifier } from "./refjwtverifier";
import { RedirectionSettings } from "./redirectionsettings";
import { HsAlgoSettings } from "./hsalgosettings";
import { RsAlgoSettings } from "./rsalgosettings";
import { EsAlgoSettings } from "./esalgosettings";
import { JwksAlgoSettings } from "./jwksalgosettings";
import { StatsdConfig } from "./statsdconfig";
import { Target } from "./target";
import { ImportExportStats } from "./importexportstats";


// ImportExportAdmins
/** 
 * Administrator using FIDO U2F device to access Otoroshi
**/
export class ImportExportAdmins extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt: number;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=registration" })
  registration: Map<string, string>;

  @Metadata({ data: "json, name=username" })
  username: string;
}


// ImportExportApiKeys
/** 
 * An Otoroshi Api Key. An Api Key is defined for a group of services to allow usage of the same Api Key for multiple services.
**/
export class ImportExportApiKeys extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizedEntities" })
  authorizedEntities: string[];

  @Metadata({ data: "json, name=clientId" })
  clientId: string;

  @Metadata({ data: "json, name=clientName" })
  clientName: string;

  @Metadata({ data: "json, name=clientSecret" })
  clientSecret: string;

  @Metadata({ data: "json, name=dailyQuota" })
  dailyQuota?: number;

  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=monthlyQuota" })
  monthlyQuota?: number;

  @Metadata({ data: "json, name=throttlingQuota" })
  throttlingQuota?: number;
}


// ImportExportErrorTemplates
/** 
 * Error templates for a service descriptor
**/
export class ImportExportErrorTemplates extends SpeakeasyBase {
  @Metadata({ data: "json, name=messages" })
  messages: Map<string, string>;

  @Metadata({ data: "json, name=serviceId" })
  serviceId: string;

  @Metadata({ data: "json, name=template40x" })
  template40x: string;

  @Metadata({ data: "json, name=template50x" })
  template50x: string;

  @Metadata({ data: "json, name=templateBuild" })
  templateBuild: string;

  @Metadata({ data: "json, name=templateMaintenance" })
  templateMaintenance: string;
}


// ImportExportServiceDescriptors
/** 
 * An otoroshi service descriptor. Represent a forward HTTP call on a domain to another location with some optional api management mecanism
**/
export class ImportExportServiceDescriptors extends SpeakeasyBase {
  @Metadata({ data: "json, name=Canary" })
  canary?: Canary;

  @Metadata({ data: "json, name=additionalHeaders" })
  additionalHeaders?: Map<string, string>;

  @Metadata({ data: "json, name=api" })
  api?: ExposedApi;

  @Metadata({ data: "json, name=authConfigRef" })
  authConfigRef?: string;

  @Metadata({ data: "json, name=buildMode" })
  buildMode: boolean;

  @Metadata({ data: "json, name=chaosConfig" })
  chaosConfig?: ChaosConfig;

  @Metadata({ data: "json, name=clientConfig" })
  clientConfig?: ClientConfig;

  @Metadata({ data: "json, name=clientValidatorRef" })
  clientValidatorRef?: string;

  @Metadata({ data: "json, name=cors" })
  cors?: CorsSettings;

  @Metadata({ data: "json, name=domain" })
  domain: string;

  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=enforceSecureCommunication" })
  enforceSecureCommunication: boolean;

  @Metadata({ data: "json, name=env" })
  env: string;

  @Metadata({ data: "json, name=forceHttps" })
  forceHttps: boolean;

  @Metadata({ data: "json, name=groups" })
  groups: string[];

  @Metadata({ data: "json, name=gzip" })
  gzip?: Gzip;

  @Metadata({ data: "json, name=headersVerification" })
  headersVerification?: Map<string, string>;

  @Metadata({ data: "json, name=healthCheck" })
  healthCheck?: HealthCheck;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=ipFiltering" })
  ipFiltering?: IpFiltering;

  @Metadata({ data: "json, name=jwtVerifier" })
  jwtVerifier?: any;

  @Metadata({ data: "json, name=localHost" })
  localHost?: string;

  @Metadata({ data: "json, name=localScheme" })
  localScheme?: string;

  @Metadata({ data: "json, name=maintenanceMode" })
  maintenanceMode: boolean;

  @Metadata({ data: "json, name=matchingHeaders" })
  matchingHeaders?: Map<string, string>;

  @Metadata({ data: "json, name=matchingRoot" })
  matchingRoot?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=overrideHost" })
  overrideHost?: boolean;

  @Metadata({ data: "json, name=privateApp" })
  privateApp: boolean;

  @Metadata({ data: "json, name=privatePatterns" })
  privatePatterns?: string[];

  @Metadata({ data: "json, name=publicPatterns" })
  publicPatterns?: string[];

  @Metadata({ data: "json, name=redirectToLocal" })
  redirectToLocal?: boolean;

  @Metadata({ data: "json, name=redirection" })
  redirection?: RedirectionSettings;

  @Metadata({ data: "json, name=root" })
  root: string;

  @Metadata({ data: "json, name=secComExcludedPatterns" })
  secComExcludedPatterns?: string[];

  @Metadata({ data: "json, name=secComSettings" })
  secComSettings?: any;

  @Metadata({ data: "json, name=sendOtoroshiHeadersBack" })
  sendOtoroshiHeadersBack?: boolean;

  @Metadata({ data: "json, name=statsdConfig" })
  statsdConfig?: StatsdConfig;

  @Metadata({ data: "json, name=subdomain" })
  subdomain: string;

  @Metadata({ data: "json, name=targets", elemType: shared.Target })
  targets: Target[];

  @Metadata({ data: "json, name=transformerRef" })
  transformerRef?: string;

  @Metadata({ data: "json, name=userFacing" })
  userFacing?: boolean;

  @Metadata({ data: "json, name=xForwardedHeaders" })
  xForwardedHeaders?: boolean;
}


// ImportExportServiceGroups
/** 
 * An Otoroshi service group is just a group of service descriptor. It is useful to be able to define Api Keys for the whole group
**/
export class ImportExportServiceGroups extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


// ImportExportSimpleAdmins
/** 
 * Administrator using just login/password tuple to access Otoroshi
**/
export class ImportExportSimpleAdmins extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt: number;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=password" })
  password: string;

  @Metadata({ data: "json, name=username" })
  username: string;
}


// ImportExport
/** 
 * The structure that can be imported to or exported from Otoroshi. It represent the memory state of Otoroshi
**/
export class ImportExport extends SpeakeasyBase {
  @Metadata({ data: "json, name=admins", elemType: shared.ImportExportAdmins })
  admins: ImportExportAdmins[];

  @Metadata({ data: "json, name=apiKeys", elemType: shared.ImportExportApiKeys })
  apiKeys: ImportExportApiKeys[];

  @Metadata({ data: "json, name=appConfig" })
  appConfig?: Map<string, string>;

  @Metadata({ data: "json, name=config" })
  config: GlobalConfig;

  @Metadata({ data: "json, name=date" })
  date: Date;

  @Metadata({ data: "json, name=dateRaw" })
  dateRaw: number;

  @Metadata({ data: "json, name=errorTemplates", elemType: shared.ImportExportErrorTemplates })
  errorTemplates: ImportExportErrorTemplates[];

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=serviceDescriptors", elemType: shared.ImportExportServiceDescriptors })
  serviceDescriptors: ImportExportServiceDescriptors[];

  @Metadata({ data: "json, name=serviceGroups", elemType: shared.ImportExportServiceGroups })
  serviceGroups: ImportExportServiceGroups[];

  @Metadata({ data: "json, name=simpleAdmins", elemType: shared.ImportExportSimpleAdmins })
  simpleAdmins: ImportExportSimpleAdmins[];

  @Metadata({ data: "json, name=stats" })
  stats: ImportExportStats;
}
