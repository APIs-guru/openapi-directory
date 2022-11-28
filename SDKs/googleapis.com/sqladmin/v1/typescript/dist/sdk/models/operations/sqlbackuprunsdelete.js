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
var SqlBackupRunsDeletePathParams = /** @class */ (function (_super) {
    __extends(SqlBackupRunsDeletePathParams, _super);
    function SqlBackupRunsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], SqlBackupRunsDeletePathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], SqlBackupRunsDeletePathParams.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], SqlBackupRunsDeletePathParams.prototype, "project", void 0);
    return SqlBackupRunsDeletePathParams;
}(SpeakeasyBase));
export { SqlBackupRunsDeletePathParams };
var SqlBackupRunsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(SqlBackupRunsDeleteQueryParams, _super);
    function SqlBackupRunsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SqlBackupRunsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SqlBackupRunsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SqlBackupRunsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SqlBackupRunsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SqlBackupRunsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SqlBackupRunsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SqlBackupRunsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SqlBackupRunsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SqlBackupRunsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SqlBackupRunsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SqlBackupRunsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return SqlBackupRunsDeleteQueryParams;
}(SpeakeasyBase));
export { SqlBackupRunsDeleteQueryParams };
var SqlBackupRunsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(SqlBackupRunsDeleteSecurityOption1, _super);
    function SqlBackupRunsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlBackupRunsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlBackupRunsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return SqlBackupRunsDeleteSecurityOption1;
}(SpeakeasyBase));
export { SqlBackupRunsDeleteSecurityOption1 };
var SqlBackupRunsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(SqlBackupRunsDeleteSecurityOption2, _super);
    function SqlBackupRunsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlBackupRunsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlBackupRunsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return SqlBackupRunsDeleteSecurityOption2;
}(SpeakeasyBase));
export { SqlBackupRunsDeleteSecurityOption2 };
var SqlBackupRunsDeleteSecurity = /** @class */ (function (_super) {
    __extends(SqlBackupRunsDeleteSecurity, _super);
    function SqlBackupRunsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlBackupRunsDeleteSecurityOption1)
    ], SqlBackupRunsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlBackupRunsDeleteSecurityOption2)
    ], SqlBackupRunsDeleteSecurity.prototype, "option2", void 0);
    return SqlBackupRunsDeleteSecurity;
}(SpeakeasyBase));
export { SqlBackupRunsDeleteSecurity };
var SqlBackupRunsDeleteRequest = /** @class */ (function (_super) {
    __extends(SqlBackupRunsDeleteRequest, _super);
    function SqlBackupRunsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlBackupRunsDeletePathParams)
    ], SqlBackupRunsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlBackupRunsDeleteQueryParams)
    ], SqlBackupRunsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlBackupRunsDeleteSecurity)
    ], SqlBackupRunsDeleteRequest.prototype, "security", void 0);
    return SqlBackupRunsDeleteRequest;
}(SpeakeasyBase));
export { SqlBackupRunsDeleteRequest };
var SqlBackupRunsDeleteResponse = /** @class */ (function (_super) {
    __extends(SqlBackupRunsDeleteResponse, _super);
    function SqlBackupRunsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SqlBackupRunsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], SqlBackupRunsDeleteResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SqlBackupRunsDeleteResponse.prototype, "statusCode", void 0);
    return SqlBackupRunsDeleteResponse;
}(SpeakeasyBase));
export { SqlBackupRunsDeleteResponse };
