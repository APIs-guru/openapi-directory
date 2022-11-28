import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Api } from "./api";
import { Authentication } from "./authentication";
import { Backend } from "./backend";
import { Billing } from "./billing";
import { Context } from "./context";
import { Control } from "./control";
import { CustomError } from "./customerror";
import { Documentation } from "./documentation";
import { Endpoint } from "./endpoint";
import { Enum } from "./enum";
import { Http } from "./http";
import { Logging } from "./logging";
import { LogDescriptor } from "./logdescriptor";
import { MetricDescriptor } from "./metricdescriptor";
import { MonitoredResourceDescriptor } from "./monitoredresourcedescriptor";
import { Monitoring } from "./monitoring";
import { Quota } from "./quota";
import { SourceInfo } from "./sourceinfo";
import { SystemParameters } from "./systemparameters";
import { Type } from "./type";
import { Usage } from "./usage";



// Service
/** 
 * `Service` is the root object of Google API service configuration (service config). It describes the basic information about a logical service, such as the service name and the user-facing title, and delegates other aspects to sub-sections. Each sub-section is either a proto message or a repeated proto message that configures a specific aspect, such as auth. For more information, see each proto message definition. Example: type: google.api.Service name: calendar.googleapis.com title: Google Calendar API apis: - name: google.calendar.v3.Calendar visibility: rules: - selector: "google.calendar.v3.*" restriction: PREVIEW backend: rules: - selector: "google.calendar.v3.*" address: calendar.example.com authentication: providers: - id: google_calendar_auth jwks_uri: https://www.googleapis.com/oauth2/v1/certs issuer: https://securetoken.google.com rules: - selector: "*" requirements: provider_id: google_calendar_auth
**/
export class Service extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apis", elemType: Api })
  apis?: Api[];

  @SpeakeasyMetadata({ data: "json, name=authentication" })
  authentication?: Authentication;

  @SpeakeasyMetadata({ data: "json, name=backend" })
  backend?: Backend;

  @SpeakeasyMetadata({ data: "json, name=billing" })
  billing?: Billing;

  @SpeakeasyMetadata({ data: "json, name=configVersion" })
  configVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: Context;

  @SpeakeasyMetadata({ data: "json, name=control" })
  control?: Control;

  @SpeakeasyMetadata({ data: "json, name=customError" })
  customError?: CustomError;

  @SpeakeasyMetadata({ data: "json, name=documentation" })
  documentation?: Documentation;

  @SpeakeasyMetadata({ data: "json, name=endpoints", elemType: Endpoint })
  endpoints?: Endpoint[];

  @SpeakeasyMetadata({ data: "json, name=enums", elemType: Enum })
  enums?: Enum[];

  @SpeakeasyMetadata({ data: "json, name=http" })
  http?: Http;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=logging" })
  logging?: Logging;

  @SpeakeasyMetadata({ data: "json, name=logs", elemType: LogDescriptor })
  logs?: LogDescriptor[];

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: MetricDescriptor })
  metrics?: MetricDescriptor[];

  @SpeakeasyMetadata({ data: "json, name=monitoredResources", elemType: MonitoredResourceDescriptor })
  monitoredResources?: MonitoredResourceDescriptor[];

  @SpeakeasyMetadata({ data: "json, name=monitoring" })
  monitoring?: Monitoring;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=producerProjectId" })
  producerProjectId?: string;

  @SpeakeasyMetadata({ data: "json, name=quota" })
  quota?: Quota;

  @SpeakeasyMetadata({ data: "json, name=sourceInfo" })
  sourceInfo?: SourceInfo;

  @SpeakeasyMetadata({ data: "json, name=systemParameters" })
  systemParameters?: SystemParameters;

  @SpeakeasyMetadata({ data: "json, name=systemTypes", elemType: Type })
  systemTypes?: Type[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=types", elemType: Type })
  types?: Type[];

  @SpeakeasyMetadata({ data: "json, name=usage" })
  usage?: Usage;
}
