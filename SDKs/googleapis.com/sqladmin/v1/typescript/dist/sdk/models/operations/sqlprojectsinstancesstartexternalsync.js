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
var SqlProjectsInstancesStartExternalSyncPathParams = /** @class */ (function (_super) {
    __extends(SqlProjectsInstancesStartExternalSyncPathParams, _super);
    function SqlProjectsInstancesStartExternalSyncPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesStartExternalSyncPathParams.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesStartExternalSyncPathParams.prototype, "project", void 0);
    return SqlProjectsInstancesStartExternalSyncPathParams;
}(SpeakeasyBase));
export { SqlProjectsInstancesStartExternalSyncPathParams };
var SqlProjectsInstancesStartExternalSyncQueryParams = /** @class */ (function (_super) {
    __extends(SqlProjectsInstancesStartExternalSyncQueryParams, _super);
    function SqlProjectsInstancesStartExternalSyncQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesStartExternalSyncQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesStartExternalSyncQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesStartExternalSyncQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesStartExternalSyncQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesStartExternalSyncQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesStartExternalSyncQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesStartExternalSyncQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SqlProjectsInstancesStartExternalSyncQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesStartExternalSyncQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesStartExternalSyncQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SqlProjectsInstancesStartExternalSyncQueryParams.prototype, "uploadProtocol", void 0);
    return SqlProjectsInstancesStartExternalSyncQueryParams;
}(SpeakeasyBase));
export { SqlProjectsInstancesStartExternalSyncQueryParams };
var SqlProjectsInstancesStartExternalSyncSecurityOption1 = /** @class */ (function (_super) {
    __extends(SqlProjectsInstancesStartExternalSyncSecurityOption1, _super);
    function SqlProjectsInstancesStartExternalSyncSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlProjectsInstancesStartExternalSyncSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlProjectsInstancesStartExternalSyncSecurityOption1.prototype, "oauth2c", void 0);
    return SqlProjectsInstancesStartExternalSyncSecurityOption1;
}(SpeakeasyBase));
export { SqlProjectsInstancesStartExternalSyncSecurityOption1 };
var SqlProjectsInstancesStartExternalSyncSecurityOption2 = /** @class */ (function (_super) {
    __extends(SqlProjectsInstancesStartExternalSyncSecurityOption2, _super);
    function SqlProjectsInstancesStartExternalSyncSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlProjectsInstancesStartExternalSyncSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlProjectsInstancesStartExternalSyncSecurityOption2.prototype, "oauth2c", void 0);
    return SqlProjectsInstancesStartExternalSyncSecurityOption2;
}(SpeakeasyBase));
export { SqlProjectsInstancesStartExternalSyncSecurityOption2 };
var SqlProjectsInstancesStartExternalSyncSecurity = /** @class */ (function (_super) {
    __extends(SqlProjectsInstancesStartExternalSyncSecurity, _super);
    function SqlProjectsInstancesStartExternalSyncSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlProjectsInstancesStartExternalSyncSecurityOption1)
    ], SqlProjectsInstancesStartExternalSyncSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlProjectsInstancesStartExternalSyncSecurityOption2)
    ], SqlProjectsInstancesStartExternalSyncSecurity.prototype, "option2", void 0);
    return SqlProjectsInstancesStartExternalSyncSecurity;
}(SpeakeasyBase));
export { SqlProjectsInstancesStartExternalSyncSecurity };
var SqlProjectsInstancesStartExternalSyncRequest = /** @class */ (function (_super) {
    __extends(SqlProjectsInstancesStartExternalSyncRequest, _super);
    function SqlProjectsInstancesStartExternalSyncRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlProjectsInstancesStartExternalSyncPathParams)
    ], SqlProjectsInstancesStartExternalSyncRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlProjectsInstancesStartExternalSyncQueryParams)
    ], SqlProjectsInstancesStartExternalSyncRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SqlInstancesStartExternalSyncRequest)
    ], SqlProjectsInstancesStartExternalSyncRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlProjectsInstancesStartExternalSyncSecurity)
    ], SqlProjectsInstancesStartExternalSyncRequest.prototype, "security", void 0);
    return SqlProjectsInstancesStartExternalSyncRequest;
}(SpeakeasyBase));
export { SqlProjectsInstancesStartExternalSyncRequest };
var SqlProjectsInstancesStartExternalSyncResponse = /** @class */ (function (_super) {
    __extends(SqlProjectsInstancesStartExternalSyncResponse, _super);
    function SqlProjectsInstancesStartExternalSyncResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SqlProjectsInstancesStartExternalSyncResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], SqlProjectsInstancesStartExternalSyncResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SqlProjectsInstancesStartExternalSyncResponse.prototype, "statusCode", void 0);
    return SqlProjectsInstancesStartExternalSyncResponse;
}(SpeakeasyBase));
export { SqlProjectsInstancesStartExternalSyncResponse };
