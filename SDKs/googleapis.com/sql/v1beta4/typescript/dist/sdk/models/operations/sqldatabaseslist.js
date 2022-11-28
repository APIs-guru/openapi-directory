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
var SqlDatabasesListPathParams = /** @class */ (function (_super) {
    __extends(SqlDatabasesListPathParams, _super);
    function SqlDatabasesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], SqlDatabasesListPathParams.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], SqlDatabasesListPathParams.prototype, "project", void 0);
    return SqlDatabasesListPathParams;
}(SpeakeasyBase));
export { SqlDatabasesListPathParams };
var SqlDatabasesListQueryParams = /** @class */ (function (_super) {
    __extends(SqlDatabasesListQueryParams, _super);
    function SqlDatabasesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SqlDatabasesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SqlDatabasesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SqlDatabasesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SqlDatabasesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SqlDatabasesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SqlDatabasesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SqlDatabasesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SqlDatabasesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SqlDatabasesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SqlDatabasesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SqlDatabasesListQueryParams.prototype, "uploadProtocol", void 0);
    return SqlDatabasesListQueryParams;
}(SpeakeasyBase));
export { SqlDatabasesListQueryParams };
var SqlDatabasesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(SqlDatabasesListSecurityOption1, _super);
    function SqlDatabasesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlDatabasesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlDatabasesListSecurityOption1.prototype, "oauth2c", void 0);
    return SqlDatabasesListSecurityOption1;
}(SpeakeasyBase));
export { SqlDatabasesListSecurityOption1 };
var SqlDatabasesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(SqlDatabasesListSecurityOption2, _super);
    function SqlDatabasesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlDatabasesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlDatabasesListSecurityOption2.prototype, "oauth2c", void 0);
    return SqlDatabasesListSecurityOption2;
}(SpeakeasyBase));
export { SqlDatabasesListSecurityOption2 };
var SqlDatabasesListSecurity = /** @class */ (function (_super) {
    __extends(SqlDatabasesListSecurity, _super);
    function SqlDatabasesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlDatabasesListSecurityOption1)
    ], SqlDatabasesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlDatabasesListSecurityOption2)
    ], SqlDatabasesListSecurity.prototype, "option2", void 0);
    return SqlDatabasesListSecurity;
}(SpeakeasyBase));
export { SqlDatabasesListSecurity };
var SqlDatabasesListRequest = /** @class */ (function (_super) {
    __extends(SqlDatabasesListRequest, _super);
    function SqlDatabasesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlDatabasesListPathParams)
    ], SqlDatabasesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlDatabasesListQueryParams)
    ], SqlDatabasesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlDatabasesListSecurity)
    ], SqlDatabasesListRequest.prototype, "security", void 0);
    return SqlDatabasesListRequest;
}(SpeakeasyBase));
export { SqlDatabasesListRequest };
var SqlDatabasesListResponse = /** @class */ (function (_super) {
    __extends(SqlDatabasesListResponse, _super);
    function SqlDatabasesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SqlDatabasesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DatabasesListResponse)
    ], SqlDatabasesListResponse.prototype, "databasesListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SqlDatabasesListResponse.prototype, "statusCode", void 0);
    return SqlDatabasesListResponse;
}(SpeakeasyBase));
export { SqlDatabasesListResponse };
