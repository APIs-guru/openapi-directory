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
var UpdateNetworkWirelessSsidBonjourForwardingPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidBonjourForwardingPathParams, _super);
    function UpdateNetworkWirelessSsidBonjourForwardingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidBonjourForwardingPathParams.prototype, "networkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidBonjourForwardingPathParams.prototype, "number", void 0);
    return UpdateNetworkWirelessSsidBonjourForwardingPathParams;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidBonjourForwardingPathParams };
export var UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum;
(function (UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum) {
    UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum["AllServices"] = "All Services";
    UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum["AirPlay"] = "AirPlay";
    UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum["Afp"] = "AFP";
    UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum["BitTorrent"] = "BitTorrent";
    UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum["Ftp"] = "FTP";
    UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum["IChat"] = "iChat";
    UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum["ITunes"] = "iTunes";
    UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum["Printers"] = "Printers";
    UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum["Samba"] = "Samba";
    UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum["Scanners"] = "Scanners";
    UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum["Ssh"] = "SSH";
})(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum || (UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum = {}));
var UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules, _super);
    function UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=services" }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules.prototype, "services", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vlanId" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules.prototype, "vlanId", void 0);
    return UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules };
var UpdateNetworkWirelessSsidBonjourForwardingRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidBonjourForwardingRequestBody, _super);
    function UpdateNetworkWirelessSsidBonjourForwardingRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidBonjourForwardingRequestBody.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessSsidBonjourForwardingRequestBody.prototype, "rules", void 0);
    return UpdateNetworkWirelessSsidBonjourForwardingRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidBonjourForwardingRequestBody };
var UpdateNetworkWirelessSsidBonjourForwardingRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidBonjourForwardingRequest, _super);
    function UpdateNetworkWirelessSsidBonjourForwardingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkWirelessSsidBonjourForwardingPathParams)
    ], UpdateNetworkWirelessSsidBonjourForwardingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkWirelessSsidBonjourForwardingRequestBody)
    ], UpdateNetworkWirelessSsidBonjourForwardingRequest.prototype, "request", void 0);
    return UpdateNetworkWirelessSsidBonjourForwardingRequest;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidBonjourForwardingRequest };
var UpdateNetworkWirelessSsidBonjourForwardingResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidBonjourForwardingResponse, _super);
    function UpdateNetworkWirelessSsidBonjourForwardingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidBonjourForwardingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidBonjourForwardingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkWirelessSsidBonjourForwardingResponse.prototype, "updateNetworkWirelessSsidBonjourForwarding200ApplicationJsonObject", void 0);
    return UpdateNetworkWirelessSsidBonjourForwardingResponse;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidBonjourForwardingResponse };
