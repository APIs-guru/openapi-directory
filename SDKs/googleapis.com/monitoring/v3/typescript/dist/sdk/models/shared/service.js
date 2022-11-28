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
import { AppEngine } from "./appengine";
import { BasicService } from "./basicservice";
import { CloudEndpoints } from "./cloudendpoints";
import { CloudRun } from "./cloudrun";
import { ClusterIstio } from "./clusteristio";
import { GkeNamespace } from "./gkenamespace";
import { GkeService } from "./gkeservice";
import { GkeWorkload } from "./gkeworkload";
import { IstioCanonicalService } from "./istiocanonicalservice";
import { MeshIstio } from "./meshistio";
import { Telemetry } from "./telemetry";
import { GkeNamespaceInput } from "./gkenamespace";
import { GkeServiceInput } from "./gkeservice";
import { GkeWorkloadInput } from "./gkeworkload";
// Service
/**
 * A Service is a discrete, autonomous, and network-accessible unit, designed to solve an individual concern (Wikipedia (https://en.wikipedia.org/wiki/Service-orientation)). In Cloud Monitoring, a Service acts as the root resource under which operational aspects of the service are accessible.
**/
var Service = /** @class */ (function (_super) {
    __extends(Service, _super);
    function Service() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appEngine" }),
        __metadata("design:type", AppEngine)
    ], Service.prototype, "appEngine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basicService" }),
        __metadata("design:type", BasicService)
    ], Service.prototype, "basicService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudEndpoints" }),
        __metadata("design:type", CloudEndpoints)
    ], Service.prototype, "cloudEndpoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudRun" }),
        __metadata("design:type", CloudRun)
    ], Service.prototype, "cloudRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterIstio" }),
        __metadata("design:type", ClusterIstio)
    ], Service.prototype, "clusterIstio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom" }),
        __metadata("design:type", Map)
    ], Service.prototype, "custom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Service.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gkeNamespace" }),
        __metadata("design:type", GkeNamespace)
    ], Service.prototype, "gkeNamespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gkeService" }),
        __metadata("design:type", GkeService)
    ], Service.prototype, "gkeService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gkeWorkload" }),
        __metadata("design:type", GkeWorkload)
    ], Service.prototype, "gkeWorkload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=istioCanonicalService" }),
        __metadata("design:type", IstioCanonicalService)
    ], Service.prototype, "istioCanonicalService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meshIstio" }),
        __metadata("design:type", MeshIstio)
    ], Service.prototype, "meshIstio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Service.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=telemetry" }),
        __metadata("design:type", Telemetry)
    ], Service.prototype, "telemetry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userLabels" }),
        __metadata("design:type", Map)
    ], Service.prototype, "userLabels", void 0);
    return Service;
}(SpeakeasyBase));
export { Service };
// ServiceInput
/**
 * A Service is a discrete, autonomous, and network-accessible unit, designed to solve an individual concern (Wikipedia (https://en.wikipedia.org/wiki/Service-orientation)). In Cloud Monitoring, a Service acts as the root resource under which operational aspects of the service are accessible.
**/
var ServiceInput = /** @class */ (function (_super) {
    __extends(ServiceInput, _super);
    function ServiceInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appEngine" }),
        __metadata("design:type", AppEngine)
    ], ServiceInput.prototype, "appEngine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=basicService" }),
        __metadata("design:type", BasicService)
    ], ServiceInput.prototype, "basicService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudEndpoints" }),
        __metadata("design:type", CloudEndpoints)
    ], ServiceInput.prototype, "cloudEndpoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudRun" }),
        __metadata("design:type", CloudRun)
    ], ServiceInput.prototype, "cloudRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clusterIstio" }),
        __metadata("design:type", ClusterIstio)
    ], ServiceInput.prototype, "clusterIstio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom" }),
        __metadata("design:type", Map)
    ], ServiceInput.prototype, "custom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ServiceInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gkeNamespace" }),
        __metadata("design:type", GkeNamespaceInput)
    ], ServiceInput.prototype, "gkeNamespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gkeService" }),
        __metadata("design:type", GkeServiceInput)
    ], ServiceInput.prototype, "gkeService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gkeWorkload" }),
        __metadata("design:type", GkeWorkloadInput)
    ], ServiceInput.prototype, "gkeWorkload", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=istioCanonicalService" }),
        __metadata("design:type", IstioCanonicalService)
    ], ServiceInput.prototype, "istioCanonicalService", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meshIstio" }),
        __metadata("design:type", MeshIstio)
    ], ServiceInput.prototype, "meshIstio", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ServiceInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=telemetry" }),
        __metadata("design:type", Telemetry)
    ], ServiceInput.prototype, "telemetry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userLabels" }),
        __metadata("design:type", Map)
    ], ServiceInput.prototype, "userLabels", void 0);
    return ServiceInput;
}(SpeakeasyBase));
export { ServiceInput };
