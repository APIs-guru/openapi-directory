import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
import { Type } from "./type";
import { Usage } from "./usage";


// Service
/** 
 * `Service` is the root object of Google API service configuration (service config). It describes the basic information about a logical service, such as the service name and the user-facing title, and delegates other aspects to sub-sections. Each sub-section is either a proto message or a repeated proto message that configures a specific aspect, such as auth. For more information, see each proto message definition. Example: type: google.api.Service name: calendar.googleapis.com title: Google Calendar API apis: - name: google.calendar.v3.Calendar visibility: rules: - selector: "google.calendar.v3.*" restriction: PREVIEW backend: rules: - selector: "google.calendar.v3.*" address: calendar.example.com authentication: providers: - id: google_calendar_auth jwks_uri: https://www.googleapis.com/oauth2/v1/certs issuer: https://securetoken.google.com rules: - selector: "*" requirements: provider_id: google_calendar_auth
**/
export class Service extends SpeakeasyBase {
  @Metadata({ data: "json, name=apis", elemType: shared.Api })
  apis?: Api[];

  @Metadata({ data: "json, name=authentication" })
  authentication?: Authentication;

  @Metadata({ data: "json, name=backend" })
  backend?: Backend;

  @Metadata({ data: "json, name=billing" })
  billing?: Billing;

  @Metadata({ data: "json, name=configVersion" })
  configVersion?: number;

  @Metadata({ data: "json, name=context" })
  context?: Context;

  @Metadata({ data: "json, name=control" })
  control?: Control;

  @Metadata({ data: "json, name=customError" })
  customError?: CustomError;

  @Metadata({ data: "json, name=documentation" })
  documentation?: Documentation;

  @Metadata({ data: "json, name=endpoints", elemType: shared.Endpoint })
  endpoints?: Endpoint[];

  @Metadata({ data: "json, name=enums", elemType: shared.Enum })
  enums?: Enum[];

  @Metadata({ data: "json, name=http" })
  http?: Http;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=logging" })
  logging?: Logging;

  @Metadata({ data: "json, name=logs", elemType: shared.LogDescriptor })
  logs?: LogDescriptor[];

  @Metadata({ data: "json, name=metrics", elemType: shared.MetricDescriptor })
  metrics?: MetricDescriptor[];

  @Metadata({ data: "json, name=monitoredResources", elemType: shared.MonitoredResourceDescriptor })
  monitoredResources?: MonitoredResourceDescriptor[];

  @Metadata({ data: "json, name=monitoring" })
  monitoring?: Monitoring;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=producerProjectId" })
  producerProjectId?: string;

  @Metadata({ data: "json, name=quota" })
  quota?: Quota;

  @Metadata({ data: "json, name=sourceInfo" })
  sourceInfo?: SourceInfo;

  @Metadata({ data: "json, name=systemParameters" })
  systemParameters?: SystemParameters;

  @Metadata({ data: "json, name=systemTypes", elemType: shared.Type })
  systemTypes?: Type[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=types", elemType: shared.Type })
  types?: Type[];

  @Metadata({ data: "json, name=usage" })
  usage?: Usage;
}
