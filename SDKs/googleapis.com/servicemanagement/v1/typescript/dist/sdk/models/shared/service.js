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
var Service = /** @class */ (function (_super) {
    __extends(Service, _super);
    function Service() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apis", elemType: Api }),
        __metadata("design:type", Array)
    ], Service.prototype, "apis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authentication" }),
        __metadata("design:type", Authentication)
    ], Service.prototype, "authentication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=backend" }),
        __metadata("design:type", Backend)
    ], Service.prototype, "backend", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billing" }),
        __metadata("design:type", Billing)
    ], Service.prototype, "billing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=configVersion" }),
        __metadata("design:type", Number)
    ], Service.prototype, "configVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=context" }),
        __metadata("design:type", Context)
    ], Service.prototype, "context", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=control" }),
        __metadata("design:type", Control)
    ], Service.prototype, "control", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customError" }),
        __metadata("design:type", CustomError)
    ], Service.prototype, "customError", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation" }),
        __metadata("design:type", Documentation)
    ], Service.prototype, "documentation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpoints", elemType: Endpoint }),
        __metadata("design:type", Array)
    ], Service.prototype, "endpoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enums", elemType: Enum }),
        __metadata("design:type", Array)
    ], Service.prototype, "enums", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=http" }),
        __metadata("design:type", Http)
    ], Service.prototype, "http", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Service.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logging" }),
        __metadata("design:type", Logging)
    ], Service.prototype, "logging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logs", elemType: LogDescriptor }),
        __metadata("design:type", Array)
    ], Service.prototype, "logs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics", elemType: MetricDescriptor }),
        __metadata("design:type", Array)
    ], Service.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitoredResources", elemType: MonitoredResourceDescriptor }),
        __metadata("design:type", Array)
    ], Service.prototype, "monitoredResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitoring" }),
        __metadata("design:type", Monitoring)
    ], Service.prototype, "monitoring", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Service.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=producerProjectId" }),
        __metadata("design:type", String)
    ], Service.prototype, "producerProjectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quota" }),
        __metadata("design:type", Quota)
    ], Service.prototype, "quota", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceInfo" }),
        __metadata("design:type", SourceInfo)
    ], Service.prototype, "sourceInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=systemParameters" }),
        __metadata("design:type", SystemParameters)
    ], Service.prototype, "systemParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=systemTypes", elemType: Type }),
        __metadata("design:type", Array)
    ], Service.prototype, "systemTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], Service.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=types", elemType: Type }),
        __metadata("design:type", Array)
    ], Service.prototype, "types", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usage" }),
        __metadata("design:type", Usage)
    ], Service.prototype, "usage", void 0);
    return Service;
}(SpeakeasyBase));
export { Service };
