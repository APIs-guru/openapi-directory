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
// Service
/**
 * An otoroshi service descriptor. Represent a forward HTTP call on a domain to another location with some optional api management mecanism
**/
var Service = /** @class */ (function (_super) {
    __extends(Service, _super);
    function Service() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Canary" }),
        __metadata("design:type", Canary)
    ], Service.prototype, "canary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalHeaders" }),
        __metadata("design:type", Map)
    ], Service.prototype, "additionalHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api" }),
        __metadata("design:type", ExposedApi)
    ], Service.prototype, "api", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authConfigRef" }),
        __metadata("design:type", String)
    ], Service.prototype, "authConfigRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buildMode" }),
        __metadata("design:type", Boolean)
    ], Service.prototype, "buildMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chaosConfig" }),
        __metadata("design:type", ChaosConfig)
    ], Service.prototype, "chaosConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientConfig" }),
        __metadata("design:type", ClientConfig)
    ], Service.prototype, "clientConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientValidatorRef" }),
        __metadata("design:type", String)
    ], Service.prototype, "clientValidatorRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cors" }),
        __metadata("design:type", CorsSettings)
    ], Service.prototype, "cors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], Service.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], Service.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enforceSecureCommunication" }),
        __metadata("design:type", Boolean)
    ], Service.prototype, "enforceSecureCommunication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=env" }),
        __metadata("design:type", String)
    ], Service.prototype, "env", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=forceHttps" }),
        __metadata("design:type", Boolean)
    ], Service.prototype, "forceHttps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups" }),
        __metadata("design:type", Array)
    ], Service.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gzip" }),
        __metadata("design:type", Gzip)
    ], Service.prototype, "gzip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=headersVerification" }),
        __metadata("design:type", Map)
    ], Service.prototype, "headersVerification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=healthCheck" }),
        __metadata("design:type", HealthCheck)
    ], Service.prototype, "healthCheck", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Service.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipFiltering" }),
        __metadata("design:type", IpFiltering)
    ], Service.prototype, "ipFiltering", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jwtVerifier" }),
        __metadata("design:type", Object)
    ], Service.prototype, "jwtVerifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localHost" }),
        __metadata("design:type", String)
    ], Service.prototype, "localHost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localScheme" }),
        __metadata("design:type", String)
    ], Service.prototype, "localScheme", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maintenanceMode" }),
        __metadata("design:type", Boolean)
    ], Service.prototype, "maintenanceMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchingHeaders" }),
        __metadata("design:type", Map)
    ], Service.prototype, "matchingHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=matchingRoot" }),
        __metadata("design:type", String)
    ], Service.prototype, "matchingRoot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], Service.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Service.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overrideHost" }),
        __metadata("design:type", Boolean)
    ], Service.prototype, "overrideHost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateApp" }),
        __metadata("design:type", Boolean)
    ], Service.prototype, "privateApp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privatePatterns" }),
        __metadata("design:type", Array)
    ], Service.prototype, "privatePatterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicPatterns" }),
        __metadata("design:type", Array)
    ], Service.prototype, "publicPatterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirectToLocal" }),
        __metadata("design:type", Boolean)
    ], Service.prototype, "redirectToLocal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirection" }),
        __metadata("design:type", RedirectionSettings)
    ], Service.prototype, "redirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=root" }),
        __metadata("design:type", String)
    ], Service.prototype, "root", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secComExcludedPatterns" }),
        __metadata("design:type", Array)
    ], Service.prototype, "secComExcludedPatterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secComSettings" }),
        __metadata("design:type", Object)
    ], Service.prototype, "secComSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sendOtoroshiHeadersBack" }),
        __metadata("design:type", Boolean)
    ], Service.prototype, "sendOtoroshiHeadersBack", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=statsdConfig" }),
        __metadata("design:type", StatsdConfig)
    ], Service.prototype, "statsdConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subdomain" }),
        __metadata("design:type", String)
    ], Service.prototype, "subdomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targets", elemType: Target }),
        __metadata("design:type", Array)
    ], Service.prototype, "targets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transformerRef" }),
        __metadata("design:type", String)
    ], Service.prototype, "transformerRef", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userFacing" }),
        __metadata("design:type", Boolean)
    ], Service.prototype, "userFacing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=xForwardedHeaders" }),
        __metadata("design:type", Boolean)
    ], Service.prototype, "xForwardedHeaders", void 0);
    return Service;
}(SpeakeasyBase));
export { Service };
