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
var UpdateNetworkWirelessSettingsPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSettingsPathParams, _super);
    function UpdateNetworkWirelessSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSettingsPathParams.prototype, "networkId", void 0);
    return UpdateNetworkWirelessSettingsPathParams;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSettingsPathParams };
export var UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum;
(function (UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum) {
    UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum["MinimizeUpgradeTime"] = "minimizeUpgradeTime";
    UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum["MinimizeClientDowntime"] = "minimizeClientDowntime";
})(UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum || (UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum = {}));
var UpdateNetworkWirelessSettingsRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSettingsRequestBody, _super);
    function UpdateNetworkWirelessSettingsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipv6BridgeEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSettingsRequestBody.prototype, "ipv6BridgeEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ledLightsOn" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSettingsRequestBody.prototype, "ledLightsOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationAnalyticsEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSettingsRequestBody.prototype, "locationAnalyticsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meshingEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSettingsRequestBody.prototype, "meshingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=upgradeStrategy" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSettingsRequestBody.prototype, "upgradeStrategy", void 0);
    return UpdateNetworkWirelessSettingsRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSettingsRequestBody };
var UpdateNetworkWirelessSettingsRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSettingsRequest, _super);
    function UpdateNetworkWirelessSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkWirelessSettingsPathParams)
    ], UpdateNetworkWirelessSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkWirelessSettingsRequestBody)
    ], UpdateNetworkWirelessSettingsRequest.prototype, "request", void 0);
    return UpdateNetworkWirelessSettingsRequest;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSettingsRequest };
var UpdateNetworkWirelessSettingsResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSettingsResponse, _super);
    function UpdateNetworkWirelessSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkWirelessSettingsResponse.prototype, "updateNetworkWirelessSettings200ApplicationJsonObject", void 0);
    return UpdateNetworkWirelessSettingsResponse;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSettingsResponse };
