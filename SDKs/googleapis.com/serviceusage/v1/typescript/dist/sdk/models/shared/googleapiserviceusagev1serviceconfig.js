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
import { Documentation } from "./documentation";
import { Endpoint } from "./endpoint";
import { MonitoredResourceDescriptor } from "./monitoredresourcedescriptor";
import { Monitoring } from "./monitoring";
import { Quota } from "./quota";
import { Usage } from "./usage";
// GoogleApiServiceusageV1ServiceConfig
/**
 * The configuration of the service.
**/
var GoogleApiServiceusageV1ServiceConfig = /** @class */ (function (_super) {
    __extends(GoogleApiServiceusageV1ServiceConfig, _super);
    function GoogleApiServiceusageV1ServiceConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apis", elemType: Api }),
        __metadata("design:type", Array)
    ], GoogleApiServiceusageV1ServiceConfig.prototype, "apis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authentication" }),
        __metadata("design:type", Authentication)
    ], GoogleApiServiceusageV1ServiceConfig.prototype, "authentication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=documentation" }),
        __metadata("design:type", Documentation)
    ], GoogleApiServiceusageV1ServiceConfig.prototype, "documentation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpoints", elemType: Endpoint }),
        __metadata("design:type", Array)
    ], GoogleApiServiceusageV1ServiceConfig.prototype, "endpoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitoredResources", elemType: MonitoredResourceDescriptor }),
        __metadata("design:type", Array)
    ], GoogleApiServiceusageV1ServiceConfig.prototype, "monitoredResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=monitoring" }),
        __metadata("design:type", Monitoring)
    ], GoogleApiServiceusageV1ServiceConfig.prototype, "monitoring", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleApiServiceusageV1ServiceConfig.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quota" }),
        __metadata("design:type", Quota)
    ], GoogleApiServiceusageV1ServiceConfig.prototype, "quota", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GoogleApiServiceusageV1ServiceConfig.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=usage" }),
        __metadata("design:type", Usage)
    ], GoogleApiServiceusageV1ServiceConfig.prototype, "usage", void 0);
    return GoogleApiServiceusageV1ServiceConfig;
}(SpeakeasyBase));
export { GoogleApiServiceusageV1ServiceConfig };
