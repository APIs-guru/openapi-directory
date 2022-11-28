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
var UpdateNetworkApplianceTrafficShapingRulesPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingRulesPathParams, _super);
    function UpdateNetworkApplianceTrafficShapingRulesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingRulesPathParams.prototype, "networkId", void 0);
    return UpdateNetworkApplianceTrafficShapingRulesPathParams;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingRulesPathParams };
export var UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum;
(function (UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum) {
    UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum["Application"] = "application";
    UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum["ApplicationCategory"] = "applicationCategory";
    UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum["Host"] = "host";
    UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum["Port"] = "port";
    UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum["IpRange"] = "ipRange";
    UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum["LocalNet"] = "localNet";
})(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum || (UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitionsTypeEnum = {}));
var UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions, _super);
    function UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions.prototype, "value", void 0);
    return UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions };
// UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits
/**
 * The bandwidth limits object, specifying the upload ('limitUp') and download ('limitDown') speed in Kbps. These are only enforced if 'settings' is set to 'custom'.
**/
var UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits, _super);
    function UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limitDown" }),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits.prototype, "limitDown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limitUp" }),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits.prototype, "limitUp", void 0);
    return UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits };
// UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits
/**
 *     An object describing the bandwidth settings for your rule.
 *
**/
var UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits, _super);
    function UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bandwidthLimits" }),
        __metadata("design:type", UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimitsBandwidthLimits)
    ], UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits.prototype, "bandwidthLimits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settings" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits.prototype, "settings", void 0);
    return UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits };
var UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules, _super);
    function UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=definitions", elemType: UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesDefinitions }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules.prototype, "definitions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dscpTagValue" }),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules.prototype, "dscpTagValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=perClientBandwidthLimits" }),
        __metadata("design:type", UpdateNetworkApplianceTrafficShapingRulesRequestBodyRulesPerClientBandwidthLimits)
    ], UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules.prototype, "perClientBandwidthLimits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules.prototype, "priority", void 0);
    return UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules };
var UpdateNetworkApplianceTrafficShapingRulesRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingRulesRequestBody, _super);
    function UpdateNetworkApplianceTrafficShapingRulesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultRulesEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkApplianceTrafficShapingRulesRequestBody.prototype, "defaultRulesEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: UpdateNetworkApplianceTrafficShapingRulesRequestBodyRules }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceTrafficShapingRulesRequestBody.prototype, "rules", void 0);
    return UpdateNetworkApplianceTrafficShapingRulesRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingRulesRequestBody };
var UpdateNetworkApplianceTrafficShapingRulesRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingRulesRequest, _super);
    function UpdateNetworkApplianceTrafficShapingRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkApplianceTrafficShapingRulesPathParams)
    ], UpdateNetworkApplianceTrafficShapingRulesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkApplianceTrafficShapingRulesRequestBody)
    ], UpdateNetworkApplianceTrafficShapingRulesRequest.prototype, "request", void 0);
    return UpdateNetworkApplianceTrafficShapingRulesRequest;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingRulesRequest };
var UpdateNetworkApplianceTrafficShapingRulesResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceTrafficShapingRulesResponse, _super);
    function UpdateNetworkApplianceTrafficShapingRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceTrafficShapingRulesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceTrafficShapingRulesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkApplianceTrafficShapingRulesResponse.prototype, "updateNetworkApplianceTrafficShapingRules200ApplicationJsonObject", void 0);
    return UpdateNetworkApplianceTrafficShapingRulesResponse;
}(SpeakeasyBase));
export { UpdateNetworkApplianceTrafficShapingRulesResponse };
