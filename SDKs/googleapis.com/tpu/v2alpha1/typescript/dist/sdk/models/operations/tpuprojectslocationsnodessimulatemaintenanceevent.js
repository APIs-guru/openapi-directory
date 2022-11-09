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
var TpuProjectsLocationsNodesSimulateMaintenanceEventPathParams = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsNodesSimulateMaintenanceEventPathParams, _super);
    function TpuProjectsLocationsNodesSimulateMaintenanceEventPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesSimulateMaintenanceEventPathParams.prototype, "name", void 0);
    return TpuProjectsLocationsNodesSimulateMaintenanceEventPathParams;
}(SpeakeasyBase));
export { TpuProjectsLocationsNodesSimulateMaintenanceEventPathParams };
var TpuProjectsLocationsNodesSimulateMaintenanceEventQueryParams = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsNodesSimulateMaintenanceEventQueryParams, _super);
    function TpuProjectsLocationsNodesSimulateMaintenanceEventQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesSimulateMaintenanceEventQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesSimulateMaintenanceEventQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesSimulateMaintenanceEventQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesSimulateMaintenanceEventQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesSimulateMaintenanceEventQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesSimulateMaintenanceEventQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesSimulateMaintenanceEventQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TpuProjectsLocationsNodesSimulateMaintenanceEventQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesSimulateMaintenanceEventQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesSimulateMaintenanceEventQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesSimulateMaintenanceEventQueryParams.prototype, "uploadProtocol", void 0);
    return TpuProjectsLocationsNodesSimulateMaintenanceEventQueryParams;
}(SpeakeasyBase));
export { TpuProjectsLocationsNodesSimulateMaintenanceEventQueryParams };
var TpuProjectsLocationsNodesSimulateMaintenanceEventSecurity = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsNodesSimulateMaintenanceEventSecurity, _super);
    function TpuProjectsLocationsNodesSimulateMaintenanceEventSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TpuProjectsLocationsNodesSimulateMaintenanceEventSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TpuProjectsLocationsNodesSimulateMaintenanceEventSecurity.prototype, "oauth2c", void 0);
    return TpuProjectsLocationsNodesSimulateMaintenanceEventSecurity;
}(SpeakeasyBase));
export { TpuProjectsLocationsNodesSimulateMaintenanceEventSecurity };
var TpuProjectsLocationsNodesSimulateMaintenanceEventRequest = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsNodesSimulateMaintenanceEventRequest, _super);
    function TpuProjectsLocationsNodesSimulateMaintenanceEventRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", TpuProjectsLocationsNodesSimulateMaintenanceEventPathParams)
    ], TpuProjectsLocationsNodesSimulateMaintenanceEventRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TpuProjectsLocationsNodesSimulateMaintenanceEventQueryParams)
    ], TpuProjectsLocationsNodesSimulateMaintenanceEventRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SimulateMaintenanceEventRequest)
    ], TpuProjectsLocationsNodesSimulateMaintenanceEventRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TpuProjectsLocationsNodesSimulateMaintenanceEventSecurity)
    ], TpuProjectsLocationsNodesSimulateMaintenanceEventRequest.prototype, "security", void 0);
    return TpuProjectsLocationsNodesSimulateMaintenanceEventRequest;
}(SpeakeasyBase));
export { TpuProjectsLocationsNodesSimulateMaintenanceEventRequest };
var TpuProjectsLocationsNodesSimulateMaintenanceEventResponse = /** @class */ (function (_super) {
    __extends(TpuProjectsLocationsNodesSimulateMaintenanceEventResponse, _super);
    function TpuProjectsLocationsNodesSimulateMaintenanceEventResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TpuProjectsLocationsNodesSimulateMaintenanceEventResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], TpuProjectsLocationsNodesSimulateMaintenanceEventResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TpuProjectsLocationsNodesSimulateMaintenanceEventResponse.prototype, "statusCode", void 0);
    return TpuProjectsLocationsNodesSimulateMaintenanceEventResponse;
}(SpeakeasyBase));
export { TpuProjectsLocationsNodesSimulateMaintenanceEventResponse };
