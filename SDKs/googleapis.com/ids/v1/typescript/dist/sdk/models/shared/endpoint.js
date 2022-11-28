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
export var EndpointSeverityEnum;
(function (EndpointSeverityEnum) {
    EndpointSeverityEnum["SeverityUnspecified"] = "SEVERITY_UNSPECIFIED";
    EndpointSeverityEnum["Informational"] = "INFORMATIONAL";
    EndpointSeverityEnum["Low"] = "LOW";
    EndpointSeverityEnum["Medium"] = "MEDIUM";
    EndpointSeverityEnum["High"] = "HIGH";
    EndpointSeverityEnum["Critical"] = "CRITICAL";
})(EndpointSeverityEnum || (EndpointSeverityEnum = {}));
export var EndpointStateEnum;
(function (EndpointStateEnum) {
    EndpointStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    EndpointStateEnum["Creating"] = "CREATING";
    EndpointStateEnum["Ready"] = "READY";
    EndpointStateEnum["Deleting"] = "DELETING";
    EndpointStateEnum["Updating"] = "UPDATING";
})(EndpointStateEnum || (EndpointStateEnum = {}));
// EndpointInput
/**
 * Endpoint describes a single IDS endpoint. It defines a forwarding rule to which packets can be sent for IDS inspection.
**/
var EndpointInput = /** @class */ (function (_super) {
    __extends(EndpointInput, _super);
    function EndpointInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], EndpointInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], EndpointInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], EndpointInput.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=severity" }),
        __metadata("design:type", String)
    ], EndpointInput.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trafficLogs" }),
        __metadata("design:type", Boolean)
    ], EndpointInput.prototype, "trafficLogs", void 0);
    return EndpointInput;
}(SpeakeasyBase));
export { EndpointInput };
// Endpoint
/**
 * Endpoint describes a single IDS endpoint. It defines a forwarding rule to which packets can be sent for IDS inspection.
**/
var Endpoint = /** @class */ (function (_super) {
    __extends(Endpoint, _super);
    function Endpoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpointForwardingRule" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "endpointForwardingRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpointIp" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "endpointIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Endpoint.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=severity" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trafficLogs" }),
        __metadata("design:type", Boolean)
    ], Endpoint.prototype, "trafficLogs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Endpoint.prototype, "updateTime", void 0);
    return Endpoint;
}(SpeakeasyBase));
export { Endpoint };
