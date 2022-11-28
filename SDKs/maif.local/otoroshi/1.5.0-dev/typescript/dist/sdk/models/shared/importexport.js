var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
import { RedirectionSettings } from "./redirectionsettings";
import { StatsdConfig } from "./statsdconfig";
import { Target } from "./target";
import { ImportExportStats } from "./importexportstats";
// ImportExportAdmins
/**
 * Administrator using FIDO U2F device to access Otoroshi
**/
var ImportExportAdmins = /** @class */ (function (_super) {
    __extends(ImportExportAdmins, _super);
    function ImportExportAdmins() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Number)
    ], ImportExportAdmins.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], ImportExportAdmins.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], ImportExportAdmins.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=registration" }),
        __metadata("design:type", Map)
    ], ImportExportAdmins.prototype, "registration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], ImportExportAdmins.prototype, "username", void 0);
    return ImportExportAdmins;
}(SpeakeasyBase));
export { ImportExportAdmins };
// ImportExportApiKeys
/**
 * An Otoroshi Api Key. An Api Key is defined for a group of services to allow usage of the same Api Key for multiple services.
**/
var ImportExportApiKeys = /** @class */ (function (_super) {
    __extends(ImportExportApiKeys, _super);
    function ImportExportApiKeys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizedEntities" }),
        __metadata("design:type", Array)
    ], ImportExportApiKeys.prototype, "authorizedEntities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], ImportExportApiKeys.prototype, "clientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientName" }),
        __metadata("design:type", String)
    ], ImportExportApiKeys.prototype, "clientName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientSecret" }),
        __metadata("design:type", String)
    ], ImportExportApiKeys.prototype, "clientSecret", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dailyQuota" }),
        __metadata("design:type", Number)
    ], ImportExportApiKeys.prototype, "dailyQuota", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], ImportExportApiKeys.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], ImportExportApiKeys.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monthlyQuota" }),
        __metadata("design:type", Number)
    ], ImportExportApiKeys.prototype, "monthlyQuota", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=throttlingQuota" }),
        __metadata("design:type", Number)
    ], ImportExportApiKeys.prototype, "throttlingQuota", void 0);
    return ImportExportApiKeys;
}(SpeakeasyBase));
export { ImportExportApiKeys };
// ImportExportErrorTemplates
/**
 * Error templates for a service descriptor
**/
var ImportExportErrorTemplates = /** @class */ (function (_super) {
    __extends(ImportExportErrorTemplates, _super);
    function ImportExportErrorTemplates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messages" }),
        __metadata("design:type", Map)
    ], ImportExportErrorTemplates.prototype, "messages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceId" }),
        __metadata("design:type", String)
    ], ImportExportErrorTemplates.prototype, "serviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template40x" }),
        __metadata("design:type", String)
    ], ImportExportErrorTemplates.prototype, "template40x", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template50x" }),
        __metadata("design:type", String)
    ], ImportExportErrorTemplates.prototype, "template50x", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=templateBuild" }),
        __metadata("design:type", String)
    ], ImportExportErrorTemplates.prototype, "templateBuild", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=templateMaintenance" }),
        __metadata("design:type", String)
    ], ImportExportErrorTemplates.prototype, "templateMaintenance", void 0);
    return ImportExportErrorTemplates;
}(SpeakeasyBase));
export { ImportExportErrorTemplates };
// ImportExportServiceDescriptors
/**
 * An otoroshi service descriptor. Represent a forward HTTP call on a domain to another location with some optional api management mecanism
**/
var ImportExportServiceDescriptors = /** @class */ (function (_super) {
    __extends(ImportExportServiceDescriptors, _super);
    function ImportExportServiceDescriptors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Canary" }),
        __metadata("design:type", Canary)
    ], ImportExportServiceDescriptors.prototype, "canary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalHeaders" }),
        __metadata("design:type", Map)
    ], ImportExportServiceDescriptors.prototype, "additionalHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api" }),
        __metadata("design:type", ExposedApi)
    ], ImportExportServiceDescriptors.prototype, "api", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authConfigRef" }),
        __metadata("design:type", String)
    ], ImportExportServiceDescriptors.prototype, "authConfigRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildMode" }),
        __metadata("design:type", Boolean)
    ], ImportExportServiceDescriptors.prototype, "buildMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chaosConfig" }),
        __metadata("design:type", ChaosConfig)
    ], ImportExportServiceDescriptors.prototype, "chaosConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientConfig" }),
        __metadata("design:type", ClientConfig)
    ], ImportExportServiceDescriptors.prototype, "clientConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientValidatorRef" }),
        __metadata("design:type", String)
    ], ImportExportServiceDescriptors.prototype, "clientValidatorRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cors" }),
        __metadata("design:type", CorsSettings)
    ], ImportExportServiceDescriptors.prototype, "cors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], ImportExportServiceDescriptors.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], ImportExportServiceDescriptors.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enforceSecureCommunication" }),
        __metadata("design:type", Boolean)
    ], ImportExportServiceDescriptors.prototype, "enforceSecureCommunication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=env" }),
        __metadata("design:type", String)
    ], ImportExportServiceDescriptors.prototype, "env", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forceHttps" }),
        __metadata("design:type", Boolean)
    ], ImportExportServiceDescriptors.prototype, "forceHttps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups" }),
        __metadata("design:type", Array)
    ], ImportExportServiceDescriptors.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gzip" }),
        __metadata("design:type", Gzip)
    ], ImportExportServiceDescriptors.prototype, "gzip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headersVerification" }),
        __metadata("design:type", Map)
    ], ImportExportServiceDescriptors.prototype, "headersVerification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=healthCheck" }),
        __metadata("design:type", HealthCheck)
    ], ImportExportServiceDescriptors.prototype, "healthCheck", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ImportExportServiceDescriptors.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipFiltering" }),
        __metadata("design:type", IpFiltering)
    ], ImportExportServiceDescriptors.prototype, "ipFiltering", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jwtVerifier" }),
        __metadata("design:type", Object)
    ], ImportExportServiceDescriptors.prototype, "jwtVerifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localHost" }),
        __metadata("design:type", String)
    ], ImportExportServiceDescriptors.prototype, "localHost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localScheme" }),
        __metadata("design:type", String)
    ], ImportExportServiceDescriptors.prototype, "localScheme", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maintenanceMode" }),
        __metadata("design:type", Boolean)
    ], ImportExportServiceDescriptors.prototype, "maintenanceMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchingHeaders" }),
        __metadata("design:type", Map)
    ], ImportExportServiceDescriptors.prototype, "matchingHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchingRoot" }),
        __metadata("design:type", String)
    ], ImportExportServiceDescriptors.prototype, "matchingRoot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], ImportExportServiceDescriptors.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ImportExportServiceDescriptors.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overrideHost" }),
        __metadata("design:type", Boolean)
    ], ImportExportServiceDescriptors.prototype, "overrideHost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateApp" }),
        __metadata("design:type", Boolean)
    ], ImportExportServiceDescriptors.prototype, "privateApp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privatePatterns" }),
        __metadata("design:type", Array)
    ], ImportExportServiceDescriptors.prototype, "privatePatterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicPatterns" }),
        __metadata("design:type", Array)
    ], ImportExportServiceDescriptors.prototype, "publicPatterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirectToLocal" }),
        __metadata("design:type", Boolean)
    ], ImportExportServiceDescriptors.prototype, "redirectToLocal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirection" }),
        __metadata("design:type", RedirectionSettings)
    ], ImportExportServiceDescriptors.prototype, "redirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=root" }),
        __metadata("design:type", String)
    ], ImportExportServiceDescriptors.prototype, "root", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secComExcludedPatterns" }),
        __metadata("design:type", Array)
    ], ImportExportServiceDescriptors.prototype, "secComExcludedPatterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secComSettings" }),
        __metadata("design:type", Object)
    ], ImportExportServiceDescriptors.prototype, "secComSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sendOtoroshiHeadersBack" }),
        __metadata("design:type", Boolean)
    ], ImportExportServiceDescriptors.prototype, "sendOtoroshiHeadersBack", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statsdConfig" }),
        __metadata("design:type", StatsdConfig)
    ], ImportExportServiceDescriptors.prototype, "statsdConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subdomain" }),
        __metadata("design:type", String)
    ], ImportExportServiceDescriptors.prototype, "subdomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targets", elemType: Target }),
        __metadata("design:type", Array)
    ], ImportExportServiceDescriptors.prototype, "targets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformerRef" }),
        __metadata("design:type", String)
    ], ImportExportServiceDescriptors.prototype, "transformerRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userFacing" }),
        __metadata("design:type", Boolean)
    ], ImportExportServiceDescriptors.prototype, "userFacing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=xForwardedHeaders" }),
        __metadata("design:type", Boolean)
    ], ImportExportServiceDescriptors.prototype, "xForwardedHeaders", void 0);
    return ImportExportServiceDescriptors;
}(SpeakeasyBase));
export { ImportExportServiceDescriptors };
// ImportExportServiceGroups
/**
 * An Otoroshi service group is just a group of service descriptor. It is useful to be able to define Api Keys for the whole group
**/
var ImportExportServiceGroups = /** @class */ (function (_super) {
    __extends(ImportExportServiceGroups, _super);
    function ImportExportServiceGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ImportExportServiceGroups.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ImportExportServiceGroups.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ImportExportServiceGroups.prototype, "name", void 0);
    return ImportExportServiceGroups;
}(SpeakeasyBase));
export { ImportExportServiceGroups };
// ImportExportSimpleAdmins
/**
 * Administrator using just login/password tuple to access Otoroshi
**/
var ImportExportSimpleAdmins = /** @class */ (function (_super) {
    __extends(ImportExportSimpleAdmins, _super);
    function ImportExportSimpleAdmins() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", Number)
    ], ImportExportSimpleAdmins.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], ImportExportSimpleAdmins.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], ImportExportSimpleAdmins.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], ImportExportSimpleAdmins.prototype, "username", void 0);
    return ImportExportSimpleAdmins;
}(SpeakeasyBase));
export { ImportExportSimpleAdmins };
// ImportExport
/**
 * The structure that can be imported to or exported from Otoroshi. It represent the memory state of Otoroshi
**/
var ImportExport = /** @class */ (function (_super) {
    __extends(ImportExport, _super);
    function ImportExport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admins", elemType: ImportExportAdmins }),
        __metadata("design:type", Array)
    ], ImportExport.prototype, "admins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiKeys", elemType: ImportExportApiKeys }),
        __metadata("design:type", Array)
    ], ImportExport.prototype, "apiKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appConfig" }),
        __metadata("design:type", Map)
    ], ImportExport.prototype, "appConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config" }),
        __metadata("design:type", GlobalConfig)
    ], ImportExport.prototype, "config", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], ImportExport.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dateRaw" }),
        __metadata("design:type", Number)
    ], ImportExport.prototype, "dateRaw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errorTemplates", elemType: ImportExportErrorTemplates }),
        __metadata("design:type", Array)
    ], ImportExport.prototype, "errorTemplates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], ImportExport.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceDescriptors", elemType: ImportExportServiceDescriptors }),
        __metadata("design:type", Array)
    ], ImportExport.prototype, "serviceDescriptors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceGroups", elemType: ImportExportServiceGroups }),
        __metadata("design:type", Array)
    ], ImportExport.prototype, "serviceGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=simpleAdmins", elemType: ImportExportSimpleAdmins }),
        __metadata("design:type", Array)
    ], ImportExport.prototype, "simpleAdmins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stats" }),
        __metadata("design:type", ImportExportStats)
    ], ImportExport.prototype, "stats", void 0);
    return ImportExport;
}(SpeakeasyBase));
export { ImportExport };
