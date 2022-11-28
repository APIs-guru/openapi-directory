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
var SqlDatabasesDeletePathParams = /** @class */ (function (_super) {
    __extends(SqlDatabasesDeletePathParams, _super);
    function SqlDatabasesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" }),
        __metadata("design:type", String)
    ], SqlDatabasesDeletePathParams.prototype, "database", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], SqlDatabasesDeletePathParams.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], SqlDatabasesDeletePathParams.prototype, "project", void 0);
    return SqlDatabasesDeletePathParams;
}(SpeakeasyBase));
export { SqlDatabasesDeletePathParams };
var SqlDatabasesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(SqlDatabasesDeleteQueryParams, _super);
    function SqlDatabasesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SqlDatabasesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SqlDatabasesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SqlDatabasesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SqlDatabasesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SqlDatabasesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SqlDatabasesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SqlDatabasesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SqlDatabasesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SqlDatabasesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SqlDatabasesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SqlDatabasesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return SqlDatabasesDeleteQueryParams;
}(SpeakeasyBase));
export { SqlDatabasesDeleteQueryParams };
var SqlDatabasesDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(SqlDatabasesDeleteSecurityOption1, _super);
    function SqlDatabasesDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlDatabasesDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlDatabasesDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return SqlDatabasesDeleteSecurityOption1;
}(SpeakeasyBase));
export { SqlDatabasesDeleteSecurityOption1 };
var SqlDatabasesDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(SqlDatabasesDeleteSecurityOption2, _super);
    function SqlDatabasesDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlDatabasesDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlDatabasesDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return SqlDatabasesDeleteSecurityOption2;
}(SpeakeasyBase));
export { SqlDatabasesDeleteSecurityOption2 };
var SqlDatabasesDeleteSecurity = /** @class */ (function (_super) {
    __extends(SqlDatabasesDeleteSecurity, _super);
    function SqlDatabasesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlDatabasesDeleteSecurityOption1)
    ], SqlDatabasesDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlDatabasesDeleteSecurityOption2)
    ], SqlDatabasesDeleteSecurity.prototype, "option2", void 0);
    return SqlDatabasesDeleteSecurity;
}(SpeakeasyBase));
export { SqlDatabasesDeleteSecurity };
var SqlDatabasesDeleteRequest = /** @class */ (function (_super) {
    __extends(SqlDatabasesDeleteRequest, _super);
    function SqlDatabasesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlDatabasesDeletePathParams)
    ], SqlDatabasesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlDatabasesDeleteQueryParams)
    ], SqlDatabasesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlDatabasesDeleteSecurity)
    ], SqlDatabasesDeleteRequest.prototype, "security", void 0);
    return SqlDatabasesDeleteRequest;
}(SpeakeasyBase));
export { SqlDatabasesDeleteRequest };
var SqlDatabasesDeleteResponse = /** @class */ (function (_super) {
    __extends(SqlDatabasesDeleteResponse, _super);
    function SqlDatabasesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SqlDatabasesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], SqlDatabasesDeleteResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SqlDatabasesDeleteResponse.prototype, "statusCode", void 0);
    return SqlDatabasesDeleteResponse;
}(SpeakeasyBase));
export { SqlDatabasesDeleteResponse };
