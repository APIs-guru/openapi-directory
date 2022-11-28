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
var UpdateNetworkAlertsSettingsPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkAlertsSettingsPathParams, _super);
    function UpdateNetworkAlertsSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkAlertsSettingsPathParams.prototype, "networkId", void 0);
    return UpdateNetworkAlertsSettingsPathParams;
}(SpeakeasyBase));
export { UpdateNetworkAlertsSettingsPathParams };
// UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations
/**
 * A hash of destinations for this specific alert
**/
var UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations = /** @class */ (function (_super) {
    __extends(UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations, _super);
    function UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allAdmins" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations.prototype, "allAdmins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails" }),
        __metadata("design:type", Array)
    ], UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpServerIds" }),
        __metadata("design:type", Array)
    ], UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations.prototype, "httpServerIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snmp" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations.prototype, "snmp", void 0);
    return UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations;
}(SpeakeasyBase));
export { UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations };
var UpdateNetworkAlertsSettingsRequestBodyAlerts = /** @class */ (function (_super) {
    __extends(UpdateNetworkAlertsSettingsRequestBodyAlerts, _super);
    function UpdateNetworkAlertsSettingsRequestBodyAlerts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alertDestinations" }),
        __metadata("design:type", UpdateNetworkAlertsSettingsRequestBodyAlertsAlertDestinations)
    ], UpdateNetworkAlertsSettingsRequestBodyAlerts.prototype, "alertDestinations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkAlertsSettingsRequestBodyAlerts.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filters" }),
        __metadata("design:type", Map)
    ], UpdateNetworkAlertsSettingsRequestBodyAlerts.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateNetworkAlertsSettingsRequestBodyAlerts.prototype, "type", void 0);
    return UpdateNetworkAlertsSettingsRequestBodyAlerts;
}(SpeakeasyBase));
export { UpdateNetworkAlertsSettingsRequestBodyAlerts };
// UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations
/**
 * The network-wide destinations for all alerts on the network.
**/
var UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations = /** @class */ (function (_super) {
    __extends(UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations, _super);
    function UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allAdmins" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations.prototype, "allAdmins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emails" }),
        __metadata("design:type", Array)
    ], UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations.prototype, "emails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpServerIds" }),
        __metadata("design:type", Array)
    ], UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations.prototype, "httpServerIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=snmp" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations.prototype, "snmp", void 0);
    return UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations;
}(SpeakeasyBase));
export { UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations };
var UpdateNetworkAlertsSettingsRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkAlertsSettingsRequestBody, _super);
    function UpdateNetworkAlertsSettingsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alerts", elemType: UpdateNetworkAlertsSettingsRequestBodyAlerts }),
        __metadata("design:type", Array)
    ], UpdateNetworkAlertsSettingsRequestBody.prototype, "alerts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultDestinations" }),
        __metadata("design:type", UpdateNetworkAlertsSettingsRequestBodyDefaultDestinations)
    ], UpdateNetworkAlertsSettingsRequestBody.prototype, "defaultDestinations", void 0);
    return UpdateNetworkAlertsSettingsRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkAlertsSettingsRequestBody };
var UpdateNetworkAlertsSettingsRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkAlertsSettingsRequest, _super);
    function UpdateNetworkAlertsSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkAlertsSettingsPathParams)
    ], UpdateNetworkAlertsSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkAlertsSettingsRequestBody)
    ], UpdateNetworkAlertsSettingsRequest.prototype, "request", void 0);
    return UpdateNetworkAlertsSettingsRequest;
}(SpeakeasyBase));
export { UpdateNetworkAlertsSettingsRequest };
var UpdateNetworkAlertsSettingsResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkAlertsSettingsResponse, _super);
    function UpdateNetworkAlertsSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkAlertsSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkAlertsSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkAlertsSettingsResponse.prototype, "updateNetworkAlertsSettings200ApplicationJsonObject", void 0);
    return UpdateNetworkAlertsSettingsResponse;
}(SpeakeasyBase));
export { UpdateNetworkAlertsSettingsResponse };
