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
import { EndpointMatcher } from "./endpointmatcher";
import { TrafficPortSelector } from "./trafficportselector";
export var EndpointPolicyTypeEnum;
(function (EndpointPolicyTypeEnum) {
    EndpointPolicyTypeEnum["EndpointPolicyTypeUnspecified"] = "ENDPOINT_POLICY_TYPE_UNSPECIFIED";
    EndpointPolicyTypeEnum["SidecarProxy"] = "SIDECAR_PROXY";
    EndpointPolicyTypeEnum["GrpcServer"] = "GRPC_SERVER";
})(EndpointPolicyTypeEnum || (EndpointPolicyTypeEnum = {}));
// EndpointPolicyInput
/**
 * EndpointPolicy is a resource that helps apply desired configuration on the endpoints that match specific criteria. For example, this resource can be used to apply "authentication config" an all endpoints that serve on port 8080.
**/
var EndpointPolicyInput = /** @class */ (function (_super) {
    __extends(EndpointPolicyInput, _super);
    function EndpointPolicyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizationPolicy" }),
        __metadata("design:type", String)
    ], EndpointPolicyInput.prototype, "authorizationPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientTlsPolicy" }),
        __metadata("design:type", String)
    ], EndpointPolicyInput.prototype, "clientTlsPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], EndpointPolicyInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpointMatcher" }),
        __metadata("design:type", EndpointMatcher)
    ], EndpointPolicyInput.prototype, "endpointMatcher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], EndpointPolicyInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EndpointPolicyInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serverTlsPolicy" }),
        __metadata("design:type", String)
    ], EndpointPolicyInput.prototype, "serverTlsPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trafficPortSelector" }),
        __metadata("design:type", TrafficPortSelector)
    ], EndpointPolicyInput.prototype, "trafficPortSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], EndpointPolicyInput.prototype, "type", void 0);
    return EndpointPolicyInput;
}(SpeakeasyBase));
export { EndpointPolicyInput };
// EndpointPolicy
/**
 * EndpointPolicy is a resource that helps apply desired configuration on the endpoints that match specific criteria. For example, this resource can be used to apply "authentication config" an all endpoints that serve on port 8080.
**/
var EndpointPolicy = /** @class */ (function (_super) {
    __extends(EndpointPolicy, _super);
    function EndpointPolicy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizationPolicy" }),
        __metadata("design:type", String)
    ], EndpointPolicy.prototype, "authorizationPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientTlsPolicy" }),
        __metadata("design:type", String)
    ], EndpointPolicy.prototype, "clientTlsPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], EndpointPolicy.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], EndpointPolicy.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endpointMatcher" }),
        __metadata("design:type", EndpointMatcher)
    ], EndpointPolicy.prototype, "endpointMatcher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], EndpointPolicy.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], EndpointPolicy.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serverTlsPolicy" }),
        __metadata("design:type", String)
    ], EndpointPolicy.prototype, "serverTlsPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trafficPortSelector" }),
        __metadata("design:type", TrafficPortSelector)
    ], EndpointPolicy.prototype, "trafficPortSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], EndpointPolicy.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], EndpointPolicy.prototype, "updateTime", void 0);
    return EndpointPolicy;
}(SpeakeasyBase));
export { EndpointPolicy };
