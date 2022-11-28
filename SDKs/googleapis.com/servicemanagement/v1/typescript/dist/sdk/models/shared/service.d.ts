import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * `Service` is the root object of Google API service configuration (service config). It describes the basic information about a logical service, such as the service name and the user-facing title, and delegates other aspects to sub-sections. Each sub-section is either a proto message or a repeated proto message that configures a specific aspect, such as auth. For more information, see each proto message definition. Example: type: google.api.Service name: calendar.googleapis.com title: Google Calendar API apis: - name: google.calendar.v3.Calendar visibility: rules: - selector: "google.calendar.v3.*" restriction: PREVIEW backend: rules: - selector: "google.calendar.v3.*" address: calendar.example.com authentication: providers: - id: google_calendar_auth jwks_uri: https://www.googleapis.com/oauth2/v1/certs issuer: https://securetoken.google.com rules: - selector: "*" requirements: provider_id: google_calendar_auth
**/
export declare class Service extends SpeakeasyBase {
    apis?: Api[];
    authentication?: Authentication;
    backend?: Backend;
    billing?: Billing;
    configVersion?: number;
    context?: Context;
    control?: Control;
    customError?: CustomError;
    documentation?: Documentation;
    endpoints?: Endpoint[];
    enums?: Enum[];
    http?: Http;
    id?: string;
    logging?: Logging;
    logs?: LogDescriptor[];
    metrics?: MetricDescriptor[];
    monitoredResources?: MonitoredResourceDescriptor[];
    monitoring?: Monitoring;
    name?: string;
    producerProjectId?: string;
    quota?: Quota;
    sourceInfo?: SourceInfo;
    systemParameters?: SystemParameters;
    systemTypes?: Type[];
    title?: string;
    types?: Type[];
    usage?: Usage;
}
