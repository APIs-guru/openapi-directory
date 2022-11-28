import { SpeakeasyBase } from "../../../internal/utils";
import { GlobalConfig } from "./globalconfig";
import { Canary } from "./canary";
import { ExposedApi } from "./exposedapi";
import { ChaosConfig } from "./chaosconfig";
import { ClientConfig } from "./clientconfig";
import { CorsSettings } from "./corssettings";
import { Gzip } from "./gzip";
import { HealthCheck } from "./healthcheck";
import { IpFiltering } from "./ipfiltering";
import { RedirectionSettings } from "./redirectionsettings";
import { StatsdConfig } from "./statsdconfig";
import { Target } from "./target";
import { ImportExportStats } from "./importexportstats";
/**
 * Administrator using FIDO U2F device to access Otoroshi
**/
export declare class ImportExportAdmins extends SpeakeasyBase {
    createdAt: number;
    label: string;
    password: string;
    registration: Map<string, string>;
    username: string;
}
/**
 * An Otoroshi Api Key. An Api Key is defined for a group of services to allow usage of the same Api Key for multiple services.
**/
export declare class ImportExportApiKeys extends SpeakeasyBase {
    authorizedEntities: string[];
    clientId: string;
    clientName: string;
    clientSecret: string;
    dailyQuota?: number;
    enabled: boolean;
    metadata?: Map<string, string>;
    monthlyQuota?: number;
    throttlingQuota?: number;
}
/**
 * Error templates for a service descriptor
**/
export declare class ImportExportErrorTemplates extends SpeakeasyBase {
    messages: Map<string, string>;
    serviceId: string;
    template40x: string;
    template50x: string;
    templateBuild: string;
    templateMaintenance: string;
}
/**
 * An otoroshi service descriptor. Represent a forward HTTP call on a domain to another location with some optional api management mecanism
**/
export declare class ImportExportServiceDescriptors extends SpeakeasyBase {
    canary?: Canary;
    additionalHeaders?: Map<string, string>;
    api?: ExposedApi;
    authConfigRef?: string;
    buildMode: boolean;
    chaosConfig?: ChaosConfig;
    clientConfig?: ClientConfig;
    clientValidatorRef?: string;
    cors?: CorsSettings;
    domain: string;
    enabled: boolean;
    enforceSecureCommunication: boolean;
    env: string;
    forceHttps: boolean;
    groups: string[];
    gzip?: Gzip;
    headersVerification?: Map<string, string>;
    healthCheck?: HealthCheck;
    id: string;
    ipFiltering?: IpFiltering;
    jwtVerifier?: any;
    localHost?: string;
    localScheme?: string;
    maintenanceMode: boolean;
    matchingHeaders?: Map<string, string>;
    matchingRoot?: string;
    metadata?: Map<string, string>;
    name: string;
    overrideHost?: boolean;
    privateApp: boolean;
    privatePatterns?: string[];
    publicPatterns?: string[];
    redirectToLocal?: boolean;
    redirection?: RedirectionSettings;
    root: string;
    secComExcludedPatterns?: string[];
    secComSettings?: any;
    sendOtoroshiHeadersBack?: boolean;
    statsdConfig?: StatsdConfig;
    subdomain: string;
    targets: Target[];
    transformerRef?: string;
    userFacing?: boolean;
    xForwardedHeaders?: boolean;
}
/**
 * An Otoroshi service group is just a group of service descriptor. It is useful to be able to define Api Keys for the whole group
**/
export declare class ImportExportServiceGroups extends SpeakeasyBase {
    description?: string;
    id: string;
    name: string;
}
/**
 * Administrator using just login/password tuple to access Otoroshi
**/
export declare class ImportExportSimpleAdmins extends SpeakeasyBase {
    createdAt: number;
    label: string;
    password: string;
    username: string;
}
/**
 * The structure that can be imported to or exported from Otoroshi. It represent the memory state of Otoroshi
**/
export declare class ImportExport extends SpeakeasyBase {
    admins: ImportExportAdmins[];
    apiKeys: ImportExportApiKeys[];
    appConfig?: Map<string, string>;
    config: GlobalConfig;
    date: Date;
    dateRaw: number;
    errorTemplates: ImportExportErrorTemplates[];
    label: string;
    serviceDescriptors: ImportExportServiceDescriptors[];
    serviceGroups: ImportExportServiceGroups[];
    simpleAdmins: ImportExportSimpleAdmins[];
    stats: ImportExportStats;
}
