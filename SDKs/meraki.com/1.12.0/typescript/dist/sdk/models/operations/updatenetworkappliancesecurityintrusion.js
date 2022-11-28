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
var UpdateNetworkApplianceSecurityIntrusionPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceSecurityIntrusionPathParams, _super);
    function UpdateNetworkApplianceSecurityIntrusionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceSecurityIntrusionPathParams.prototype, "networkId", void 0);
    return UpdateNetworkApplianceSecurityIntrusionPathParams;
}(SpeakeasyBase));
export { UpdateNetworkApplianceSecurityIntrusionPathParams };
export var UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum;
(function (UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum) {
    UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum["Connectivity"] = "connectivity";
    UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum["Balanced"] = "balanced";
    UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum["Security"] = "security";
})(UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum || (UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum = {}));
export var UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum;
(function (UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum) {
    UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum["Prevention"] = "prevention";
    UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum["Detection"] = "detection";
    UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum["Disabled"] = "disabled";
})(UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum || (UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum = {}));
// UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks
/**
 * Set the included/excluded networks from the intrusion engine (optional - omitting will leave current config unchanged). This is available only in 'passthrough' mode
**/
var UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks, _super);
    function UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludedCidr" }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks.prototype, "excludedCidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includedCidr" }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks.prototype, "includedCidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useDefault" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks.prototype, "useDefault", void 0);
    return UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks;
}(SpeakeasyBase));
export { UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks };
var UpdateNetworkApplianceSecurityIntrusionRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceSecurityIntrusionRequestBody, _super);
    function UpdateNetworkApplianceSecurityIntrusionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idsRulesets" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceSecurityIntrusionRequestBody.prototype, "idsRulesets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceSecurityIntrusionRequestBody.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protectedNetworks" }),
        __metadata("design:type", UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks)
    ], UpdateNetworkApplianceSecurityIntrusionRequestBody.prototype, "protectedNetworks", void 0);
    return UpdateNetworkApplianceSecurityIntrusionRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkApplianceSecurityIntrusionRequestBody };
var UpdateNetworkApplianceSecurityIntrusionRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceSecurityIntrusionRequest, _super);
    function UpdateNetworkApplianceSecurityIntrusionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkApplianceSecurityIntrusionPathParams)
    ], UpdateNetworkApplianceSecurityIntrusionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkApplianceSecurityIntrusionRequestBody)
    ], UpdateNetworkApplianceSecurityIntrusionRequest.prototype, "request", void 0);
    return UpdateNetworkApplianceSecurityIntrusionRequest;
}(SpeakeasyBase));
export { UpdateNetworkApplianceSecurityIntrusionRequest };
var UpdateNetworkApplianceSecurityIntrusionResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceSecurityIntrusionResponse, _super);
    function UpdateNetworkApplianceSecurityIntrusionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceSecurityIntrusionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceSecurityIntrusionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkApplianceSecurityIntrusionResponse.prototype, "updateNetworkApplianceSecurityIntrusion200ApplicationJsonObject", void 0);
    return UpdateNetworkApplianceSecurityIntrusionResponse;
}(SpeakeasyBase));
export { UpdateNetworkApplianceSecurityIntrusionResponse };
