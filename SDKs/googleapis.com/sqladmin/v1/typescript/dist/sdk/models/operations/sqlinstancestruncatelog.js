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
var SqlInstancesTruncateLogPathParams = /** @class */ (function (_super) {
    __extends(SqlInstancesTruncateLogPathParams, _super);
    function SqlInstancesTruncateLogPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], SqlInstancesTruncateLogPathParams.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], SqlInstancesTruncateLogPathParams.prototype, "project", void 0);
    return SqlInstancesTruncateLogPathParams;
}(SpeakeasyBase));
export { SqlInstancesTruncateLogPathParams };
var SqlInstancesTruncateLogQueryParams = /** @class */ (function (_super) {
    __extends(SqlInstancesTruncateLogQueryParams, _super);
    function SqlInstancesTruncateLogQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SqlInstancesTruncateLogQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SqlInstancesTruncateLogQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SqlInstancesTruncateLogQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SqlInstancesTruncateLogQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SqlInstancesTruncateLogQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SqlInstancesTruncateLogQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SqlInstancesTruncateLogQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SqlInstancesTruncateLogQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SqlInstancesTruncateLogQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SqlInstancesTruncateLogQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SqlInstancesTruncateLogQueryParams.prototype, "uploadProtocol", void 0);
    return SqlInstancesTruncateLogQueryParams;
}(SpeakeasyBase));
export { SqlInstancesTruncateLogQueryParams };
var SqlInstancesTruncateLogSecurityOption1 = /** @class */ (function (_super) {
    __extends(SqlInstancesTruncateLogSecurityOption1, _super);
    function SqlInstancesTruncateLogSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlInstancesTruncateLogSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlInstancesTruncateLogSecurityOption1.prototype, "oauth2c", void 0);
    return SqlInstancesTruncateLogSecurityOption1;
}(SpeakeasyBase));
export { SqlInstancesTruncateLogSecurityOption1 };
var SqlInstancesTruncateLogSecurityOption2 = /** @class */ (function (_super) {
    __extends(SqlInstancesTruncateLogSecurityOption2, _super);
    function SqlInstancesTruncateLogSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlInstancesTruncateLogSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlInstancesTruncateLogSecurityOption2.prototype, "oauth2c", void 0);
    return SqlInstancesTruncateLogSecurityOption2;
}(SpeakeasyBase));
export { SqlInstancesTruncateLogSecurityOption2 };
var SqlInstancesTruncateLogSecurity = /** @class */ (function (_super) {
    __extends(SqlInstancesTruncateLogSecurity, _super);
    function SqlInstancesTruncateLogSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlInstancesTruncateLogSecurityOption1)
    ], SqlInstancesTruncateLogSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlInstancesTruncateLogSecurityOption2)
    ], SqlInstancesTruncateLogSecurity.prototype, "option2", void 0);
    return SqlInstancesTruncateLogSecurity;
}(SpeakeasyBase));
export { SqlInstancesTruncateLogSecurity };
var SqlInstancesTruncateLogRequest = /** @class */ (function (_super) {
    __extends(SqlInstancesTruncateLogRequest, _super);
    function SqlInstancesTruncateLogRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesTruncateLogPathParams)
    ], SqlInstancesTruncateLogRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesTruncateLogQueryParams)
    ], SqlInstancesTruncateLogRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.InstancesTruncateLogRequest)
    ], SqlInstancesTruncateLogRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesTruncateLogSecurity)
    ], SqlInstancesTruncateLogRequest.prototype, "security", void 0);
    return SqlInstancesTruncateLogRequest;
}(SpeakeasyBase));
export { SqlInstancesTruncateLogRequest };
var SqlInstancesTruncateLogResponse = /** @class */ (function (_super) {
    __extends(SqlInstancesTruncateLogResponse, _super);
    function SqlInstancesTruncateLogResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SqlInstancesTruncateLogResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], SqlInstancesTruncateLogResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SqlInstancesTruncateLogResponse.prototype, "statusCode", void 0);
    return SqlInstancesTruncateLogResponse;
}(SpeakeasyBase));
export { SqlInstancesTruncateLogResponse };
