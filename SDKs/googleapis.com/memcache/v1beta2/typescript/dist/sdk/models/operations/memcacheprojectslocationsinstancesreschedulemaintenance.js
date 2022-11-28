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
import * as shared from "../shared";
var MemcacheProjectsLocationsInstancesRescheduleMaintenancePathParams = /** @class */ (function (_super) {
    __extends(MemcacheProjectsLocationsInstancesRescheduleMaintenancePathParams, _super);
    function MemcacheProjectsLocationsInstancesRescheduleMaintenancePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], MemcacheProjectsLocationsInstancesRescheduleMaintenancePathParams.prototype, "instance", void 0);
    return MemcacheProjectsLocationsInstancesRescheduleMaintenancePathParams;
}(SpeakeasyBase));
export { MemcacheProjectsLocationsInstancesRescheduleMaintenancePathParams };
var MemcacheProjectsLocationsInstancesRescheduleMaintenanceQueryParams = /** @class */ (function (_super) {
    __extends(MemcacheProjectsLocationsInstancesRescheduleMaintenanceQueryParams, _super);
    function MemcacheProjectsLocationsInstancesRescheduleMaintenanceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MemcacheProjectsLocationsInstancesRescheduleMaintenanceQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MemcacheProjectsLocationsInstancesRescheduleMaintenanceQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MemcacheProjectsLocationsInstancesRescheduleMaintenanceQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MemcacheProjectsLocationsInstancesRescheduleMaintenanceQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MemcacheProjectsLocationsInstancesRescheduleMaintenanceQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MemcacheProjectsLocationsInstancesRescheduleMaintenanceQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MemcacheProjectsLocationsInstancesRescheduleMaintenanceQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MemcacheProjectsLocationsInstancesRescheduleMaintenanceQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MemcacheProjectsLocationsInstancesRescheduleMaintenanceQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MemcacheProjectsLocationsInstancesRescheduleMaintenanceQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MemcacheProjectsLocationsInstancesRescheduleMaintenanceQueryParams.prototype, "uploadProtocol", void 0);
    return MemcacheProjectsLocationsInstancesRescheduleMaintenanceQueryParams;
}(SpeakeasyBase));
export { MemcacheProjectsLocationsInstancesRescheduleMaintenanceQueryParams };
var MemcacheProjectsLocationsInstancesRescheduleMaintenanceSecurity = /** @class */ (function (_super) {
    __extends(MemcacheProjectsLocationsInstancesRescheduleMaintenanceSecurity, _super);
    function MemcacheProjectsLocationsInstancesRescheduleMaintenanceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MemcacheProjectsLocationsInstancesRescheduleMaintenanceSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MemcacheProjectsLocationsInstancesRescheduleMaintenanceSecurity.prototype, "oauth2c", void 0);
    return MemcacheProjectsLocationsInstancesRescheduleMaintenanceSecurity;
}(SpeakeasyBase));
export { MemcacheProjectsLocationsInstancesRescheduleMaintenanceSecurity };
var MemcacheProjectsLocationsInstancesRescheduleMaintenanceRequest = /** @class */ (function (_super) {
    __extends(MemcacheProjectsLocationsInstancesRescheduleMaintenanceRequest, _super);
    function MemcacheProjectsLocationsInstancesRescheduleMaintenanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MemcacheProjectsLocationsInstancesRescheduleMaintenancePathParams)
    ], MemcacheProjectsLocationsInstancesRescheduleMaintenanceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MemcacheProjectsLocationsInstancesRescheduleMaintenanceQueryParams)
    ], MemcacheProjectsLocationsInstancesRescheduleMaintenanceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RescheduleMaintenanceRequest)
    ], MemcacheProjectsLocationsInstancesRescheduleMaintenanceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MemcacheProjectsLocationsInstancesRescheduleMaintenanceSecurity)
    ], MemcacheProjectsLocationsInstancesRescheduleMaintenanceRequest.prototype, "security", void 0);
    return MemcacheProjectsLocationsInstancesRescheduleMaintenanceRequest;
}(SpeakeasyBase));
export { MemcacheProjectsLocationsInstancesRescheduleMaintenanceRequest };
var MemcacheProjectsLocationsInstancesRescheduleMaintenanceResponse = /** @class */ (function (_super) {
    __extends(MemcacheProjectsLocationsInstancesRescheduleMaintenanceResponse, _super);
    function MemcacheProjectsLocationsInstancesRescheduleMaintenanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MemcacheProjectsLocationsInstancesRescheduleMaintenanceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], MemcacheProjectsLocationsInstancesRescheduleMaintenanceResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MemcacheProjectsLocationsInstancesRescheduleMaintenanceResponse.prototype, "statusCode", void 0);
    return MemcacheProjectsLocationsInstancesRescheduleMaintenanceResponse;
}(SpeakeasyBase));
export { MemcacheProjectsLocationsInstancesRescheduleMaintenanceResponse };
