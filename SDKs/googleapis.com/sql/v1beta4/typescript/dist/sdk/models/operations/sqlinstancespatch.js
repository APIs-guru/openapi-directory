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
var SqlInstancesPatchPathParams = /** @class */ (function (_super) {
    __extends(SqlInstancesPatchPathParams, _super);
    function SqlInstancesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], SqlInstancesPatchPathParams.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], SqlInstancesPatchPathParams.prototype, "project", void 0);
    return SqlInstancesPatchPathParams;
}(SpeakeasyBase));
export { SqlInstancesPatchPathParams };
var SqlInstancesPatchQueryParams = /** @class */ (function (_super) {
    __extends(SqlInstancesPatchQueryParams, _super);
    function SqlInstancesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SqlInstancesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SqlInstancesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SqlInstancesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SqlInstancesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SqlInstancesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SqlInstancesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SqlInstancesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SqlInstancesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SqlInstancesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SqlInstancesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SqlInstancesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return SqlInstancesPatchQueryParams;
}(SpeakeasyBase));
export { SqlInstancesPatchQueryParams };
var SqlInstancesPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(SqlInstancesPatchSecurityOption1, _super);
    function SqlInstancesPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlInstancesPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlInstancesPatchSecurityOption1.prototype, "oauth2c", void 0);
    return SqlInstancesPatchSecurityOption1;
}(SpeakeasyBase));
export { SqlInstancesPatchSecurityOption1 };
var SqlInstancesPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(SqlInstancesPatchSecurityOption2, _super);
    function SqlInstancesPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlInstancesPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlInstancesPatchSecurityOption2.prototype, "oauth2c", void 0);
    return SqlInstancesPatchSecurityOption2;
}(SpeakeasyBase));
export { SqlInstancesPatchSecurityOption2 };
var SqlInstancesPatchSecurity = /** @class */ (function (_super) {
    __extends(SqlInstancesPatchSecurity, _super);
    function SqlInstancesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlInstancesPatchSecurityOption1)
    ], SqlInstancesPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlInstancesPatchSecurityOption2)
    ], SqlInstancesPatchSecurity.prototype, "option2", void 0);
    return SqlInstancesPatchSecurity;
}(SpeakeasyBase));
export { SqlInstancesPatchSecurity };
var SqlInstancesPatchRequest = /** @class */ (function (_super) {
    __extends(SqlInstancesPatchRequest, _super);
    function SqlInstancesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesPatchPathParams)
    ], SqlInstancesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesPatchQueryParams)
    ], SqlInstancesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DatabaseInstanceInput)
    ], SqlInstancesPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesPatchSecurity)
    ], SqlInstancesPatchRequest.prototype, "security", void 0);
    return SqlInstancesPatchRequest;
}(SpeakeasyBase));
export { SqlInstancesPatchRequest };
var SqlInstancesPatchResponse = /** @class */ (function (_super) {
    __extends(SqlInstancesPatchResponse, _super);
    function SqlInstancesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SqlInstancesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], SqlInstancesPatchResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SqlInstancesPatchResponse.prototype, "statusCode", void 0);
    return SqlInstancesPatchResponse;
}(SpeakeasyBase));
export { SqlInstancesPatchResponse };
