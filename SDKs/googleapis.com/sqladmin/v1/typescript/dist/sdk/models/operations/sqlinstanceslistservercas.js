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
var SqlInstancesListServerCasPathParams = /** @class */ (function (_super) {
    __extends(SqlInstancesListServerCasPathParams, _super);
    function SqlInstancesListServerCasPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], SqlInstancesListServerCasPathParams.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], SqlInstancesListServerCasPathParams.prototype, "project", void 0);
    return SqlInstancesListServerCasPathParams;
}(SpeakeasyBase));
export { SqlInstancesListServerCasPathParams };
var SqlInstancesListServerCasQueryParams = /** @class */ (function (_super) {
    __extends(SqlInstancesListServerCasQueryParams, _super);
    function SqlInstancesListServerCasQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SqlInstancesListServerCasQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SqlInstancesListServerCasQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SqlInstancesListServerCasQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SqlInstancesListServerCasQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SqlInstancesListServerCasQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SqlInstancesListServerCasQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SqlInstancesListServerCasQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SqlInstancesListServerCasQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SqlInstancesListServerCasQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SqlInstancesListServerCasQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SqlInstancesListServerCasQueryParams.prototype, "uploadProtocol", void 0);
    return SqlInstancesListServerCasQueryParams;
}(SpeakeasyBase));
export { SqlInstancesListServerCasQueryParams };
var SqlInstancesListServerCasSecurityOption1 = /** @class */ (function (_super) {
    __extends(SqlInstancesListServerCasSecurityOption1, _super);
    function SqlInstancesListServerCasSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlInstancesListServerCasSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlInstancesListServerCasSecurityOption1.prototype, "oauth2c", void 0);
    return SqlInstancesListServerCasSecurityOption1;
}(SpeakeasyBase));
export { SqlInstancesListServerCasSecurityOption1 };
var SqlInstancesListServerCasSecurityOption2 = /** @class */ (function (_super) {
    __extends(SqlInstancesListServerCasSecurityOption2, _super);
    function SqlInstancesListServerCasSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlInstancesListServerCasSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlInstancesListServerCasSecurityOption2.prototype, "oauth2c", void 0);
    return SqlInstancesListServerCasSecurityOption2;
}(SpeakeasyBase));
export { SqlInstancesListServerCasSecurityOption2 };
var SqlInstancesListServerCasSecurity = /** @class */ (function (_super) {
    __extends(SqlInstancesListServerCasSecurity, _super);
    function SqlInstancesListServerCasSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlInstancesListServerCasSecurityOption1)
    ], SqlInstancesListServerCasSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlInstancesListServerCasSecurityOption2)
    ], SqlInstancesListServerCasSecurity.prototype, "option2", void 0);
    return SqlInstancesListServerCasSecurity;
}(SpeakeasyBase));
export { SqlInstancesListServerCasSecurity };
var SqlInstancesListServerCasRequest = /** @class */ (function (_super) {
    __extends(SqlInstancesListServerCasRequest, _super);
    function SqlInstancesListServerCasRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesListServerCasPathParams)
    ], SqlInstancesListServerCasRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesListServerCasQueryParams)
    ], SqlInstancesListServerCasRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesListServerCasSecurity)
    ], SqlInstancesListServerCasRequest.prototype, "security", void 0);
    return SqlInstancesListServerCasRequest;
}(SpeakeasyBase));
export { SqlInstancesListServerCasRequest };
var SqlInstancesListServerCasResponse = /** @class */ (function (_super) {
    __extends(SqlInstancesListServerCasResponse, _super);
    function SqlInstancesListServerCasResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SqlInstancesListServerCasResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InstancesListServerCasResponse)
    ], SqlInstancesListServerCasResponse.prototype, "instancesListServerCasResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SqlInstancesListServerCasResponse.prototype, "statusCode", void 0);
    return SqlInstancesListServerCasResponse;
}(SpeakeasyBase));
export { SqlInstancesListServerCasResponse };
