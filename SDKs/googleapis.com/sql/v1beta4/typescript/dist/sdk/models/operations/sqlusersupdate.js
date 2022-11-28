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
var SqlUsersUpdatePathParams = /** @class */ (function (_super) {
    __extends(SqlUsersUpdatePathParams, _super);
    function SqlUsersUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], SqlUsersUpdatePathParams.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], SqlUsersUpdatePathParams.prototype, "project", void 0);
    return SqlUsersUpdatePathParams;
}(SpeakeasyBase));
export { SqlUsersUpdatePathParams };
var SqlUsersUpdateQueryParams = /** @class */ (function (_super) {
    __extends(SqlUsersUpdateQueryParams, _super);
    function SqlUsersUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SqlUsersUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SqlUsersUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SqlUsersUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SqlUsersUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SqlUsersUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=host" }),
        __metadata("design:type", String)
    ], SqlUsersUpdateQueryParams.prototype, "host", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SqlUsersUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SqlUsersUpdateQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SqlUsersUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SqlUsersUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SqlUsersUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SqlUsersUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SqlUsersUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return SqlUsersUpdateQueryParams;
}(SpeakeasyBase));
export { SqlUsersUpdateQueryParams };
var SqlUsersUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(SqlUsersUpdateSecurityOption1, _super);
    function SqlUsersUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlUsersUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlUsersUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return SqlUsersUpdateSecurityOption1;
}(SpeakeasyBase));
export { SqlUsersUpdateSecurityOption1 };
var SqlUsersUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(SqlUsersUpdateSecurityOption2, _super);
    function SqlUsersUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlUsersUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlUsersUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return SqlUsersUpdateSecurityOption2;
}(SpeakeasyBase));
export { SqlUsersUpdateSecurityOption2 };
var SqlUsersUpdateSecurity = /** @class */ (function (_super) {
    __extends(SqlUsersUpdateSecurity, _super);
    function SqlUsersUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlUsersUpdateSecurityOption1)
    ], SqlUsersUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlUsersUpdateSecurityOption2)
    ], SqlUsersUpdateSecurity.prototype, "option2", void 0);
    return SqlUsersUpdateSecurity;
}(SpeakeasyBase));
export { SqlUsersUpdateSecurity };
var SqlUsersUpdateRequest = /** @class */ (function (_super) {
    __extends(SqlUsersUpdateRequest, _super);
    function SqlUsersUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlUsersUpdatePathParams)
    ], SqlUsersUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlUsersUpdateQueryParams)
    ], SqlUsersUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.User)
    ], SqlUsersUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlUsersUpdateSecurity)
    ], SqlUsersUpdateRequest.prototype, "security", void 0);
    return SqlUsersUpdateRequest;
}(SpeakeasyBase));
export { SqlUsersUpdateRequest };
var SqlUsersUpdateResponse = /** @class */ (function (_super) {
    __extends(SqlUsersUpdateResponse, _super);
    function SqlUsersUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SqlUsersUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], SqlUsersUpdateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SqlUsersUpdateResponse.prototype, "statusCode", void 0);
    return SqlUsersUpdateResponse;
}(SpeakeasyBase));
export { SqlUsersUpdateResponse };
