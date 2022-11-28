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
var UpdateNetworkSwitchAccessPolicyPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchAccessPolicyPathParams, _super);
    function UpdateNetworkSwitchAccessPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accessPolicyNumber" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchAccessPolicyPathParams.prototype, "accessPolicyNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchAccessPolicyPathParams.prototype, "networkId", void 0);
    return UpdateNetworkSwitchAccessPolicyPathParams;
}(SpeakeasyBase));
export { UpdateNetworkSwitchAccessPolicyPathParams };
export var UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum;
(function (UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum) {
    UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum["EightHundredAndTwo1x"] = "802.1x";
    UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum["MacAuthenticationBypass"] = "MAC authentication bypass";
    UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum["HybridAuthentication"] = "Hybrid authentication";
})(UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum || (UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum = {}));
export var UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum;
(function (UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum) {
    UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum["SingleHost"] = "Single-Host";
    UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum["MultiDomain"] = "Multi-Domain";
    UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum["MultiHost"] = "Multi-Host";
    UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum["MultiAuth"] = "Multi-Auth";
})(UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum || (UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum = {}));
// UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth
/**
 * Critical auth settings for when authentication is rejected by the RADIUS server
**/
var UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth, _super);
    function UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataVlanId" }),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth.prototype, "dataVlanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suspendPortBounce" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth.prototype, "suspendPortBounce", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voiceVlanId" }),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth.prototype, "voiceVlanId", void 0);
    return UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth;
}(SpeakeasyBase));
export { UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth };
// UpdateNetworkSwitchAccessPolicyRequestBodyRadius
/**
 * Object for RADIUS Settings
**/
var UpdateNetworkSwitchAccessPolicyRequestBodyRadius = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchAccessPolicyRequestBodyRadius, _super);
    function UpdateNetworkSwitchAccessPolicyRequestBodyRadius() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=criticalAuth" }),
        __metadata("design:type", UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth)
    ], UpdateNetworkSwitchAccessPolicyRequestBodyRadius.prototype, "criticalAuth", void 0);
    return UpdateNetworkSwitchAccessPolicyRequestBodyRadius;
}(SpeakeasyBase));
export { UpdateNetworkSwitchAccessPolicyRequestBodyRadius };
var UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers, _super);
    function UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers.prototype, "host", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secret" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers.prototype, "secret", void 0);
    return UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers;
}(SpeakeasyBase));
export { UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers };
var UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers, _super);
    function UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers.prototype, "host", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secret" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers.prototype, "secret", void 0);
    return UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers;
}(SpeakeasyBase));
export { UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers };
var UpdateNetworkSwitchAccessPolicyRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchAccessPolicyRequestBody, _super);
    function UpdateNetworkSwitchAccessPolicyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessPolicyType" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchAccessPolicyRequestBody.prototype, "accessPolicyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=guestVlanId" }),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchAccessPolicyRequestBody.prototype, "guestVlanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostMode" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchAccessPolicyRequestBody.prototype, "hostMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=increaseAccessSpeed" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSwitchAccessPolicyRequestBody.prototype, "increaseAccessSpeed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchAccessPolicyRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radius" }),
        __metadata("design:type", UpdateNetworkSwitchAccessPolicyRequestBodyRadius)
    ], UpdateNetworkSwitchAccessPolicyRequestBody.prototype, "radius", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusAccountingEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSwitchAccessPolicyRequestBody.prototype, "radiusAccountingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusAccountingServers", elemType: UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers }),
        __metadata("design:type", Array)
    ], UpdateNetworkSwitchAccessPolicyRequestBody.prototype, "radiusAccountingServers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusCoaSupportEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSwitchAccessPolicyRequestBody.prototype, "radiusCoaSupportEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusGroupAttribute" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchAccessPolicyRequestBody.prototype, "radiusGroupAttribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusServers", elemType: UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers }),
        __metadata("design:type", Array)
    ], UpdateNetworkSwitchAccessPolicyRequestBody.prototype, "radiusServers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusTestingEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSwitchAccessPolicyRequestBody.prototype, "radiusTestingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlRedirectWalledGardenEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSwitchAccessPolicyRequestBody.prototype, "urlRedirectWalledGardenEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlRedirectWalledGardenRanges" }),
        __metadata("design:type", Array)
    ], UpdateNetworkSwitchAccessPolicyRequestBody.prototype, "urlRedirectWalledGardenRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voiceVlanClients" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkSwitchAccessPolicyRequestBody.prototype, "voiceVlanClients", void 0);
    return UpdateNetworkSwitchAccessPolicyRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkSwitchAccessPolicyRequestBody };
var UpdateNetworkSwitchAccessPolicyRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchAccessPolicyRequest, _super);
    function UpdateNetworkSwitchAccessPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkSwitchAccessPolicyPathParams)
    ], UpdateNetworkSwitchAccessPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkSwitchAccessPolicyRequestBody)
    ], UpdateNetworkSwitchAccessPolicyRequest.prototype, "request", void 0);
    return UpdateNetworkSwitchAccessPolicyRequest;
}(SpeakeasyBase));
export { UpdateNetworkSwitchAccessPolicyRequest };
var UpdateNetworkSwitchAccessPolicyResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchAccessPolicyResponse, _super);
    function UpdateNetworkSwitchAccessPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchAccessPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchAccessPolicyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkSwitchAccessPolicyResponse.prototype, "updateNetworkSwitchAccessPolicy200ApplicationJsonObject", void 0);
    return UpdateNetworkSwitchAccessPolicyResponse;
}(SpeakeasyBase));
export { UpdateNetworkSwitchAccessPolicyResponse };
