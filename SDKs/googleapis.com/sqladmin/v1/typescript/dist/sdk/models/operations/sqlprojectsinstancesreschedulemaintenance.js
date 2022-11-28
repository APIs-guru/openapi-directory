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
var SqlProjectsInstancesRescheduleMaintenancePathParams = /** @class */ (function (_super) {
    __extends(SqlProjectsInstancesRescheduleMaintenancePathParams, _super);
    function SqlProjectsInstancesRescheduleMaintenancePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesRescheduleMaintenancePathParams.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesRescheduleMaintenancePathParams.prototype, "project", void 0);
    return SqlProjectsInstancesRescheduleMaintenancePathParams;
}(SpeakeasyBase));
export { SqlProjectsInstancesRescheduleMaintenancePathParams };
var SqlProjectsInstancesRescheduleMaintenanceQueryParams = /** @class */ (function (_super) {
    __extends(SqlProjectsInstancesRescheduleMaintenanceQueryParams, _super);
    function SqlProjectsInstancesRescheduleMaintenanceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesRescheduleMaintenanceQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesRescheduleMaintenanceQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesRescheduleMaintenanceQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesRescheduleMaintenanceQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesRescheduleMaintenanceQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesRescheduleMaintenanceQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesRescheduleMaintenanceQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SqlProjectsInstancesRescheduleMaintenanceQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesRescheduleMaintenanceQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesRescheduleMaintenanceQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesRescheduleMaintenanceQueryParams.prototype, "uploadProtocol", void 0);
    return SqlProjectsInstancesRescheduleMaintenanceQueryParams;
}(SpeakeasyBase));
export { SqlProjectsInstancesRescheduleMaintenanceQueryParams };
var SqlProjectsInstancesRescheduleMaintenanceSecurityOption1 = /** @class */ (function (_super) {
    __extends(SqlProjectsInstancesRescheduleMaintenanceSecurityOption1, _super);
    function SqlProjectsInstancesRescheduleMaintenanceSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlProjectsInstancesRescheduleMaintenanceSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlProjectsInstancesRescheduleMaintenanceSecurityOption1.prototype, "oauth2c", void 0);
    return SqlProjectsInstancesRescheduleMaintenanceSecurityOption1;
}(SpeakeasyBase));
export { SqlProjectsInstancesRescheduleMaintenanceSecurityOption1 };
var SqlProjectsInstancesRescheduleMaintenanceSecurityOption2 = /** @class */ (function (_super) {
    __extends(SqlProjectsInstancesRescheduleMaintenanceSecurityOption2, _super);
    function SqlProjectsInstancesRescheduleMaintenanceSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlProjectsInstancesRescheduleMaintenanceSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlProjectsInstancesRescheduleMaintenanceSecurityOption2.prototype, "oauth2c", void 0);
    return SqlProjectsInstancesRescheduleMaintenanceSecurityOption2;
}(SpeakeasyBase));
export { SqlProjectsInstancesRescheduleMaintenanceSecurityOption2 };
var SqlProjectsInstancesRescheduleMaintenanceSecurity = /** @class */ (function (_super) {
    __extends(SqlProjectsInstancesRescheduleMaintenanceSecurity, _super);
    function SqlProjectsInstancesRescheduleMaintenanceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlProjectsInstancesRescheduleMaintenanceSecurityOption1)
    ], SqlProjectsInstancesRescheduleMaintenanceSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlProjectsInstancesRescheduleMaintenanceSecurityOption2)
    ], SqlProjectsInstancesRescheduleMaintenanceSecurity.prototype, "option2", void 0);
    return SqlProjectsInstancesRescheduleMaintenanceSecurity;
}(SpeakeasyBase));
export { SqlProjectsInstancesRescheduleMaintenanceSecurity };
var SqlProjectsInstancesRescheduleMaintenanceRequest = /** @class */ (function (_super) {
    __extends(SqlProjectsInstancesRescheduleMaintenanceRequest, _super);
    function SqlProjectsInstancesRescheduleMaintenanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlProjectsInstancesRescheduleMaintenancePathParams)
    ], SqlProjectsInstancesRescheduleMaintenanceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlProjectsInstancesRescheduleMaintenanceQueryParams)
    ], SqlProjectsInstancesRescheduleMaintenanceRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SqlInstancesRescheduleMaintenanceRequestBody)
    ], SqlProjectsInstancesRescheduleMaintenanceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlProjectsInstancesRescheduleMaintenanceSecurity)
    ], SqlProjectsInstancesRescheduleMaintenanceRequest.prototype, "security", void 0);
    return SqlProjectsInstancesRescheduleMaintenanceRequest;
}(SpeakeasyBase));
export { SqlProjectsInstancesRescheduleMaintenanceRequest };
var SqlProjectsInstancesRescheduleMaintenanceResponse = /** @class */ (function (_super) {
    __extends(SqlProjectsInstancesRescheduleMaintenanceResponse, _super);
    function SqlProjectsInstancesRescheduleMaintenanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SqlProjectsInstancesRescheduleMaintenanceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], SqlProjectsInstancesRescheduleMaintenanceResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SqlProjectsInstancesRescheduleMaintenanceResponse.prototype, "statusCode", void 0);
    return SqlProjectsInstancesRescheduleMaintenanceResponse;
}(SpeakeasyBase));
export { SqlProjectsInstancesRescheduleMaintenanceResponse };
