import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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


// Service
/** 
 * An otoroshi service descriptor. Represent a forward HTTP call on a domain to another location with some optional api management mecanism
**/
export class Service extends SpeakeasyBase {
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
