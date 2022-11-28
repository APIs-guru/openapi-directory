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
var SqlInstancesRestartPathParams = /** @class */ (function (_super) {
    __extends(SqlInstancesRestartPathParams, _super);
    function SqlInstancesRestartPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], SqlInstancesRestartPathParams.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], SqlInstancesRestartPathParams.prototype, "project", void 0);
    return SqlInstancesRestartPathParams;
}(SpeakeasyBase));
export { SqlInstancesRestartPathParams };
var SqlInstancesRestartQueryParams = /** @class */ (function (_super) {
    __extends(SqlInstancesRestartQueryParams, _super);
    function SqlInstancesRestartQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SqlInstancesRestartQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SqlInstancesRestartQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SqlInstancesRestartQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SqlInstancesRestartQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SqlInstancesRestartQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SqlInstancesRestartQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SqlInstancesRestartQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SqlInstancesRestartQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SqlInstancesRestartQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SqlInstancesRestartQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SqlInstancesRestartQueryParams.prototype, "uploadProtocol", void 0);
    return SqlInstancesRestartQueryParams;
}(SpeakeasyBase));
export { SqlInstancesRestartQueryParams };
var SqlInstancesRestartSecurityOption1 = /** @class */ (function (_super) {
    __extends(SqlInstancesRestartSecurityOption1, _super);
    function SqlInstancesRestartSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlInstancesRestartSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlInstancesRestartSecurityOption1.prototype, "oauth2c", void 0);
    return SqlInstancesRestartSecurityOption1;
}(SpeakeasyBase));
export { SqlInstancesRestartSecurityOption1 };
var SqlInstancesRestartSecurityOption2 = /** @class */ (function (_super) {
    __extends(SqlInstancesRestartSecurityOption2, _super);
    function SqlInstancesRestartSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlInstancesRestartSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlInstancesRestartSecurityOption2.prototype, "oauth2c", void 0);
    return SqlInstancesRestartSecurityOption2;
}(SpeakeasyBase));
export { SqlInstancesRestartSecurityOption2 };
var SqlInstancesRestartSecurity = /** @class */ (function (_super) {
    __extends(SqlInstancesRestartSecurity, _super);
    function SqlInstancesRestartSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlInstancesRestartSecurityOption1)
    ], SqlInstancesRestartSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlInstancesRestartSecurityOption2)
    ], SqlInstancesRestartSecurity.prototype, "option2", void 0);
    return SqlInstancesRestartSecurity;
}(SpeakeasyBase));
export { SqlInstancesRestartSecurity };
var SqlInstancesRestartRequest = /** @class */ (function (_super) {
    __extends(SqlInstancesRestartRequest, _super);
    function SqlInstancesRestartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesRestartPathParams)
    ], SqlInstancesRestartRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesRestartQueryParams)
    ], SqlInstancesRestartRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesRestartSecurity)
    ], SqlInstancesRestartRequest.prototype, "security", void 0);
    return SqlInstancesRestartRequest;
}(SpeakeasyBase));
export { SqlInstancesRestartRequest };
var SqlInstancesRestartResponse = /** @class */ (function (_super) {
    __extends(SqlInstancesRestartResponse, _super);
    function SqlInstancesRestartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SqlInstancesRestartResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], SqlInstancesRestartResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SqlInstancesRestartResponse.prototype, "statusCode", void 0);
    return SqlInstancesRestartResponse;
}(SpeakeasyBase));
export { SqlInstancesRestartResponse };
