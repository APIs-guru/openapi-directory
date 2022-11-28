import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=registration" })
  registration: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}


// ImportExportApiKeys
/** 
 * An Otoroshi Api Key. An Api Key is defined for a group of services to allow usage of the same Api Key for multiple services.
**/
export class ImportExportApiKeys extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizedEntities" })
  authorizedEntities: string[];

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=clientName" })
  clientName: string;

  @SpeakeasyMetadata({ data: "json, name=clientSecret" })
  clientSecret: string;

  @SpeakeasyMetadata({ data: "json, name=dailyQuota" })
  dailyQuota?: number;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=monthlyQuota" })
  monthlyQuota?: number;

  @SpeakeasyMetadata({ data: "json, name=throttlingQuota" })
  throttlingQuota?: number;
}


// ImportExportErrorTemplates
/** 
 * Error templates for a service descriptor
**/
export class ImportExportErrorTemplates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messages" })
  messages: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=serviceId" })
  serviceId: string;

  @SpeakeasyMetadata({ data: "json, name=template40x" })
  template40x: string;

  @SpeakeasyMetadata({ data: "json, name=template50x" })
  template50x: string;

  @SpeakeasyMetadata({ data: "json, name=templateBuild" })
  templateBuild: string;

  @SpeakeasyMetadata({ data: "json, name=templateMaintenance" })
  templateMaintenance: string;
}


// ImportExportServiceDescriptors
/** 
 * An otoroshi service descriptor. Represent a forward HTTP call on a domain to another location with some optional api management mecanism
**/
export class ImportExportServiceDescriptors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Canary" })
  canary?: Canary;

  @SpeakeasyMetadata({ data: "json, name=additionalHeaders" })
  additionalHeaders?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=api" })
  api?: ExposedApi;

  @SpeakeasyMetadata({ data: "json, name=authConfigRef" })
  authConfigRef?: string;

  @SpeakeasyMetadata({ data: "json, name=buildMode" })
  buildMode: boolean;

  @SpeakeasyMetadata({ data: "json, name=chaosConfig" })
  chaosConfig?: ChaosConfig;

  @SpeakeasyMetadata({ data: "json, name=clientConfig" })
  clientConfig?: ClientConfig;

  @SpeakeasyMetadata({ data: "json, name=clientValidatorRef" })
  clientValidatorRef?: string;

  @SpeakeasyMetadata({ data: "json, name=cors" })
  cors?: CorsSettings;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=enforceSecureCommunication" })
  enforceSecureCommunication: boolean;

  @SpeakeasyMetadata({ data: "json, name=env" })
  env: string;

  @SpeakeasyMetadata({ data: "json, name=forceHttps" })
  forceHttps: boolean;

  @SpeakeasyMetadata({ data: "json, name=groups" })
  groups: string[];

  @SpeakeasyMetadata({ data: "json, name=gzip" })
  gzip?: Gzip;

  @SpeakeasyMetadata({ data: "json, name=headersVerification" })
  headersVerification?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=healthCheck" })
  healthCheck?: HealthCheck;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=ipFiltering" })
  ipFiltering?: IpFiltering;

  @SpeakeasyMetadata({ data: "json, name=jwtVerifier" })
  jwtVerifier?: any;

  @SpeakeasyMetadata({ data: "json, name=localHost" })
  localHost?: string;

  @SpeakeasyMetadata({ data: "json, name=localScheme" })
  localScheme?: string;

  @SpeakeasyMetadata({ data: "json, name=maintenanceMode" })
  maintenanceMode: boolean;

  @SpeakeasyMetadata({ data: "json, name=matchingHeaders" })
  matchingHeaders?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=matchingRoot" })
  matchingRoot?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=overrideHost" })
  overrideHost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=privateApp" })
  privateApp: boolean;

  @SpeakeasyMetadata({ data: "json, name=privatePatterns" })
  privatePatterns?: string[];

  @SpeakeasyMetadata({ data: "json, name=publicPatterns" })
  publicPatterns?: string[];

  @SpeakeasyMetadata({ data: "json, name=redirectToLocal" })
  redirectToLocal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=redirection" })
  redirection?: RedirectionSettings;

  @SpeakeasyMetadata({ data: "json, name=root" })
  root: string;

  @SpeakeasyMetadata({ data: "json, name=secComExcludedPatterns" })
  secComExcludedPatterns?: string[];

  @SpeakeasyMetadata({ data: "json, name=secComSettings" })
  secComSettings?: any;

  @SpeakeasyMetadata({ data: "json, name=sendOtoroshiHeadersBack" })
  sendOtoroshiHeadersBack?: boolean;

  @SpeakeasyMetadata({ data: "json, name=statsdConfig" })
  statsdConfig?: StatsdConfig;

  @SpeakeasyMetadata({ data: "json, name=subdomain" })
  subdomain: string;

  @SpeakeasyMetadata({ data: "json, name=targets", elemType: Target })
  targets: Target[];

  @SpeakeasyMetadata({ data: "json, name=transformerRef" })
  transformerRef?: string;

  @SpeakeasyMetadata({ data: "json, name=userFacing" })
  userFacing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=xForwardedHeaders" })
  xForwardedHeaders?: boolean;
}


// ImportExportServiceGroups
/** 
 * An Otoroshi service group is just a group of service descriptor. It is useful to be able to define Api Keys for the whole group
**/
export class ImportExportServiceGroups extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


// ImportExportSimpleAdmins
/** 
 * Administrator using just login/password tuple to access Otoroshi
**/
export class ImportExportSimpleAdmins extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}


// ImportExport
/** 
 * The structure that can be imported to or exported from Otoroshi. It represent the memory state of Otoroshi
**/
export class ImportExport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admins", elemType: ImportExportAdmins })
  admins: ImportExportAdmins[];

  @SpeakeasyMetadata({ data: "json, name=apiKeys", elemType: ImportExportApiKeys })
  apiKeys: ImportExportApiKeys[];

  @SpeakeasyMetadata({ data: "json, name=appConfig" })
  appConfig?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config: GlobalConfig;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date: Date;

  @SpeakeasyMetadata({ data: "json, name=dateRaw" })
  dateRaw: number;

  @SpeakeasyMetadata({ data: "json, name=errorTemplates", elemType: ImportExportErrorTemplates })
  errorTemplates: ImportExportErrorTemplates[];

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=serviceDescriptors", elemType: ImportExportServiceDescriptors })
  serviceDescriptors: ImportExportServiceDescriptors[];

  @SpeakeasyMetadata({ data: "json, name=serviceGroups", elemType: ImportExportServiceGroups })
  serviceGroups: ImportExportServiceGroups[];

  @SpeakeasyMetadata({ data: "json, name=simpleAdmins", elemType: ImportExportSimpleAdmins })
  simpleAdmins: ImportExportSimpleAdmins[];

  @SpeakeasyMetadata({ data: "json, name=stats" })
  stats: ImportExportStats;
}
