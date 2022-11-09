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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var ProximitybeaconBeaconsDiagnosticsListPathParams = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsDiagnosticsListPathParams, _super);
    function ProximitybeaconBeaconsDiagnosticsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=beaconName" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDiagnosticsListPathParams.prototype, "beaconName", void 0);
    return ProximitybeaconBeaconsDiagnosticsListPathParams;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsDiagnosticsListPathParams };
export var ProximitybeaconBeaconsDiagnosticsListAlertFilterEnum;
(function (ProximitybeaconBeaconsDiagnosticsListAlertFilterEnum) {
    ProximitybeaconBeaconsDiagnosticsListAlertFilterEnum["AlertUnspecified"] = "ALERT_UNSPECIFIED";
    ProximitybeaconBeaconsDiagnosticsListAlertFilterEnum["WrongLocation"] = "WRONG_LOCATION";
    ProximitybeaconBeaconsDiagnosticsListAlertFilterEnum["LowBattery"] = "LOW_BATTERY";
    ProximitybeaconBeaconsDiagnosticsListAlertFilterEnum["LowActivity"] = "LOW_ACTIVITY";
})(ProximitybeaconBeaconsDiagnosticsListAlertFilterEnum || (ProximitybeaconBeaconsDiagnosticsListAlertFilterEnum = {}));
var ProximitybeaconBeaconsDiagnosticsListQueryParams = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsDiagnosticsListQueryParams, _super);
    function ProximitybeaconBeaconsDiagnosticsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDiagnosticsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDiagnosticsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alertFilter" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDiagnosticsListQueryParams.prototype, "alertFilter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDiagnosticsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDiagnosticsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDiagnosticsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDiagnosticsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDiagnosticsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ProximitybeaconBeaconsDiagnosticsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDiagnosticsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ProximitybeaconBeaconsDiagnosticsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=projectId" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDiagnosticsListQueryParams.prototype, "projectId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDiagnosticsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDiagnosticsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDiagnosticsListQueryParams.prototype, "uploadProtocol", void 0);
    return ProximitybeaconBeaconsDiagnosticsListQueryParams;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsDiagnosticsListQueryParams };
var ProximitybeaconBeaconsDiagnosticsListSecurity = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsDiagnosticsListSecurity, _super);
    function ProximitybeaconBeaconsDiagnosticsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ProximitybeaconBeaconsDiagnosticsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ProximitybeaconBeaconsDiagnosticsListSecurity.prototype, "oauth2c", void 0);
    return ProximitybeaconBeaconsDiagnosticsListSecurity;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsDiagnosticsListSecurity };
var ProximitybeaconBeaconsDiagnosticsListRequest = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsDiagnosticsListRequest, _super);
    function ProximitybeaconBeaconsDiagnosticsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ProximitybeaconBeaconsDiagnosticsListPathParams)
    ], ProximitybeaconBeaconsDiagnosticsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ProximitybeaconBeaconsDiagnosticsListQueryParams)
    ], ProximitybeaconBeaconsDiagnosticsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ProximitybeaconBeaconsDiagnosticsListSecurity)
    ], ProximitybeaconBeaconsDiagnosticsListRequest.prototype, "security", void 0);
    return ProximitybeaconBeaconsDiagnosticsListRequest;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsDiagnosticsListRequest };
var ProximitybeaconBeaconsDiagnosticsListResponse = /** @class */ (function (_super) {
    __extends(ProximitybeaconBeaconsDiagnosticsListResponse, _super);
    function ProximitybeaconBeaconsDiagnosticsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ProximitybeaconBeaconsDiagnosticsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListDiagnosticsResponse)
    ], ProximitybeaconBeaconsDiagnosticsListResponse.prototype, "listDiagnosticsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ProximitybeaconBeaconsDiagnosticsListResponse.prototype, "statusCode", void 0);
    return ProximitybeaconBeaconsDiagnosticsListResponse;
}(SpeakeasyBase));
export { ProximitybeaconBeaconsDiagnosticsListResponse };
