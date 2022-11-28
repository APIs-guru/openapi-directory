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
var SqlBackupRunsInsertPathParams = /** @class */ (function (_super) {
    __extends(SqlBackupRunsInsertPathParams, _super);
    function SqlBackupRunsInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], SqlBackupRunsInsertPathParams.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], SqlBackupRunsInsertPathParams.prototype, "project", void 0);
    return SqlBackupRunsInsertPathParams;
}(SpeakeasyBase));
export { SqlBackupRunsInsertPathParams };
var SqlBackupRunsInsertQueryParams = /** @class */ (function (_super) {
    __extends(SqlBackupRunsInsertQueryParams, _super);
    function SqlBackupRunsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SqlBackupRunsInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SqlBackupRunsInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SqlBackupRunsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SqlBackupRunsInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SqlBackupRunsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SqlBackupRunsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SqlBackupRunsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SqlBackupRunsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SqlBackupRunsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SqlBackupRunsInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SqlBackupRunsInsertQueryParams.prototype, "uploadProtocol", void 0);
    return SqlBackupRunsInsertQueryParams;
}(SpeakeasyBase));
export { SqlBackupRunsInsertQueryParams };
var SqlBackupRunsInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(SqlBackupRunsInsertSecurityOption1, _super);
    function SqlBackupRunsInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlBackupRunsInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlBackupRunsInsertSecurityOption1.prototype, "oauth2c", void 0);
    return SqlBackupRunsInsertSecurityOption1;
}(SpeakeasyBase));
export { SqlBackupRunsInsertSecurityOption1 };
var SqlBackupRunsInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(SqlBackupRunsInsertSecurityOption2, _super);
    function SqlBackupRunsInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlBackupRunsInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlBackupRunsInsertSecurityOption2.prototype, "oauth2c", void 0);
    return SqlBackupRunsInsertSecurityOption2;
}(SpeakeasyBase));
export { SqlBackupRunsInsertSecurityOption2 };
var SqlBackupRunsInsertSecurity = /** @class */ (function (_super) {
    __extends(SqlBackupRunsInsertSecurity, _super);
    function SqlBackupRunsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlBackupRunsInsertSecurityOption1)
    ], SqlBackupRunsInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlBackupRunsInsertSecurityOption2)
    ], SqlBackupRunsInsertSecurity.prototype, "option2", void 0);
    return SqlBackupRunsInsertSecurity;
}(SpeakeasyBase));
export { SqlBackupRunsInsertSecurity };
var SqlBackupRunsInsertRequest = /** @class */ (function (_super) {
    __extends(SqlBackupRunsInsertRequest, _super);
    function SqlBackupRunsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlBackupRunsInsertPathParams)
    ], SqlBackupRunsInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlBackupRunsInsertQueryParams)
    ], SqlBackupRunsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BackupRun)
    ], SqlBackupRunsInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlBackupRunsInsertSecurity)
    ], SqlBackupRunsInsertRequest.prototype, "security", void 0);
    return SqlBackupRunsInsertRequest;
}(SpeakeasyBase));
export { SqlBackupRunsInsertRequest };
var SqlBackupRunsInsertResponse = /** @class */ (function (_super) {
    __extends(SqlBackupRunsInsertResponse, _super);
    function SqlBackupRunsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SqlBackupRunsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], SqlBackupRunsInsertResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SqlBackupRunsInsertResponse.prototype, "statusCode", void 0);
    return SqlBackupRunsInsertResponse;
}(SpeakeasyBase));
export { SqlBackupRunsInsertResponse };
