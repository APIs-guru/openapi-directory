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
var CreateNetworkSwitchAccessPolicyPathParams = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchAccessPolicyPathParams, _super);
    function CreateNetworkSwitchAccessPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchAccessPolicyPathParams.prototype, "networkId", void 0);
    return CreateNetworkSwitchAccessPolicyPathParams;
}(SpeakeasyBase));
export { CreateNetworkSwitchAccessPolicyPathParams };
export var CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum;
(function (CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum) {
    CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum["EightHundredAndTwo1x"] = "802.1x";
    CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum["MacAuthenticationBypass"] = "MAC authentication bypass";
    CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum["HybridAuthentication"] = "Hybrid authentication";
})(CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum || (CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum = {}));
export var CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum;
(function (CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum) {
    CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum["SingleHost"] = "Single-Host";
    CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum["MultiDomain"] = "Multi-Domain";
    CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum["MultiHost"] = "Multi-Host";
    CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum["MultiAuth"] = "Multi-Auth";
})(CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum || (CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum = {}));
// CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth
/**
 * Critical auth settings for when authentication is rejected by the RADIUS server
**/
var CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth, _super);
    function CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataVlanId" }),
        __metadata("design:type", Number)
    ], CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth.prototype, "dataVlanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=suspendPortBounce" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth.prototype, "suspendPortBounce", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voiceVlanId" }),
        __metadata("design:type", Number)
    ], CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth.prototype, "voiceVlanId", void 0);
    return CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth;
}(SpeakeasyBase));
export { CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth };
// CreateNetworkSwitchAccessPolicyRequestBodyRadius
/**
 * Object for RADIUS Settings
**/
var CreateNetworkSwitchAccessPolicyRequestBodyRadius = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchAccessPolicyRequestBodyRadius, _super);
    function CreateNetworkSwitchAccessPolicyRequestBodyRadius() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=criticalAuth" }),
        __metadata("design:type", CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth)
    ], CreateNetworkSwitchAccessPolicyRequestBodyRadius.prototype, "criticalAuth", void 0);
    return CreateNetworkSwitchAccessPolicyRequestBodyRadius;
}(SpeakeasyBase));
export { CreateNetworkSwitchAccessPolicyRequestBodyRadius };
var CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers, _super);
    function CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers.prototype, "host", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secret" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers.prototype, "secret", void 0);
    return CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers;
}(SpeakeasyBase));
export { CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers };
var CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers, _super);
    function CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=host" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers.prototype, "host", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=port" }),
        __metadata("design:type", Number)
    ], CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers.prototype, "port", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secret" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers.prototype, "secret", void 0);
    return CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers;
}(SpeakeasyBase));
export { CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers };
var CreateNetworkSwitchAccessPolicyRequestBody = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchAccessPolicyRequestBody, _super);
    function CreateNetworkSwitchAccessPolicyRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessPolicyType" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchAccessPolicyRequestBody.prototype, "accessPolicyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=guestVlanId" }),
        __metadata("design:type", Number)
    ], CreateNetworkSwitchAccessPolicyRequestBody.prototype, "guestVlanId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostMode" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchAccessPolicyRequestBody.prototype, "hostMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=increaseAccessSpeed" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkSwitchAccessPolicyRequestBody.prototype, "increaseAccessSpeed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchAccessPolicyRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radius" }),
        __metadata("design:type", CreateNetworkSwitchAccessPolicyRequestBodyRadius)
    ], CreateNetworkSwitchAccessPolicyRequestBody.prototype, "radius", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusAccountingEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkSwitchAccessPolicyRequestBody.prototype, "radiusAccountingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusAccountingServers", elemType: CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers }),
        __metadata("design:type", Array)
    ], CreateNetworkSwitchAccessPolicyRequestBody.prototype, "radiusAccountingServers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusCoaSupportEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkSwitchAccessPolicyRequestBody.prototype, "radiusCoaSupportEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusGroupAttribute" }),
        __metadata("design:type", String)
    ], CreateNetworkSwitchAccessPolicyRequestBody.prototype, "radiusGroupAttribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusServers", elemType: CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers }),
        __metadata("design:type", Array)
    ], CreateNetworkSwitchAccessPolicyRequestBody.prototype, "radiusServers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=radiusTestingEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkSwitchAccessPolicyRequestBody.prototype, "radiusTestingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlRedirectWalledGardenEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkSwitchAccessPolicyRequestBody.prototype, "urlRedirectWalledGardenEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlRedirectWalledGardenRanges" }),
        __metadata("design:type", Array)
    ], CreateNetworkSwitchAccessPolicyRequestBody.prototype, "urlRedirectWalledGardenRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=voiceVlanClients" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkSwitchAccessPolicyRequestBody.prototype, "voiceVlanClients", void 0);
    return CreateNetworkSwitchAccessPolicyRequestBody;
}(SpeakeasyBase));
export { CreateNetworkSwitchAccessPolicyRequestBody };
var CreateNetworkSwitchAccessPolicyRequest = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchAccessPolicyRequest, _super);
    function CreateNetworkSwitchAccessPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateNetworkSwitchAccessPolicyPathParams)
    ], CreateNetworkSwitchAccessPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateNetworkSwitchAccessPolicyRequestBody)
    ], CreateNetworkSwitchAccessPolicyRequest.prototype, "request", void 0);
    return CreateNetworkSwitchAccessPolicyRequest;
}(SpeakeasyBase));
export { CreateNetworkSwitchAccessPolicyRequest };
var CreateNetworkSwitchAccessPolicyResponse = /** @class */ (function (_super) {
    __extends(CreateNetworkSwitchAccessPolicyResponse, _super);
    function CreateNetworkSwitchAccessPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateNetworkSwitchAccessPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateNetworkSwitchAccessPolicyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateNetworkSwitchAccessPolicyResponse.prototype, "createNetworkSwitchAccessPolicy201ApplicationJsonObject", void 0);
    return CreateNetworkSwitchAccessPolicyResponse;
}(SpeakeasyBase));
export { CreateNetworkSwitchAccessPolicyResponse };
