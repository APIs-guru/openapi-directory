import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
