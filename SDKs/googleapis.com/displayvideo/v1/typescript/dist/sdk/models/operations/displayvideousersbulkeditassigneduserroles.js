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
var DisplayvideoUsersBulkEditAssignedUserRolesPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoUsersBulkEditAssignedUserRolesPathParams, _super);
    function DisplayvideoUsersBulkEditAssignedUserRolesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], DisplayvideoUsersBulkEditAssignedUserRolesPathParams.prototype, "userId", void 0);
    return DisplayvideoUsersBulkEditAssignedUserRolesPathParams;
}(SpeakeasyBase));
export { DisplayvideoUsersBulkEditAssignedUserRolesPathParams };
var DisplayvideoUsersBulkEditAssignedUserRolesQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoUsersBulkEditAssignedUserRolesQueryParams, _super);
    function DisplayvideoUsersBulkEditAssignedUserRolesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoUsersBulkEditAssignedUserRolesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoUsersBulkEditAssignedUserRolesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoUsersBulkEditAssignedUserRolesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoUsersBulkEditAssignedUserRolesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoUsersBulkEditAssignedUserRolesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoUsersBulkEditAssignedUserRolesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoUsersBulkEditAssignedUserRolesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoUsersBulkEditAssignedUserRolesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoUsersBulkEditAssignedUserRolesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoUsersBulkEditAssignedUserRolesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoUsersBulkEditAssignedUserRolesQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoUsersBulkEditAssignedUserRolesQueryParams;
}(SpeakeasyBase));
export { DisplayvideoUsersBulkEditAssignedUserRolesQueryParams };
var DisplayvideoUsersBulkEditAssignedUserRolesSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoUsersBulkEditAssignedUserRolesSecurity, _super);
    function DisplayvideoUsersBulkEditAssignedUserRolesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoUsersBulkEditAssignedUserRolesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoUsersBulkEditAssignedUserRolesSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoUsersBulkEditAssignedUserRolesSecurity;
}(SpeakeasyBase));
export { DisplayvideoUsersBulkEditAssignedUserRolesSecurity };
var DisplayvideoUsersBulkEditAssignedUserRolesRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoUsersBulkEditAssignedUserRolesRequest, _super);
    function DisplayvideoUsersBulkEditAssignedUserRolesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoUsersBulkEditAssignedUserRolesPathParams)
    ], DisplayvideoUsersBulkEditAssignedUserRolesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoUsersBulkEditAssignedUserRolesQueryParams)
    ], DisplayvideoUsersBulkEditAssignedUserRolesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BulkEditAssignedUserRolesRequestInput)
    ], DisplayvideoUsersBulkEditAssignedUserRolesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoUsersBulkEditAssignedUserRolesSecurity)
    ], DisplayvideoUsersBulkEditAssignedUserRolesRequest.prototype, "security", void 0);
    return DisplayvideoUsersBulkEditAssignedUserRolesRequest;
}(SpeakeasyBase));
export { DisplayvideoUsersBulkEditAssignedUserRolesRequest };
var DisplayvideoUsersBulkEditAssignedUserRolesResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoUsersBulkEditAssignedUserRolesResponse, _super);
    function DisplayvideoUsersBulkEditAssignedUserRolesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BulkEditAssignedUserRolesResponse)
    ], DisplayvideoUsersBulkEditAssignedUserRolesResponse.prototype, "bulkEditAssignedUserRolesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoUsersBulkEditAssignedUserRolesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoUsersBulkEditAssignedUserRolesResponse.prototype, "statusCode", void 0);
    return DisplayvideoUsersBulkEditAssignedUserRolesResponse;
}(SpeakeasyBase));
export { DisplayvideoUsersBulkEditAssignedUserRolesResponse };
