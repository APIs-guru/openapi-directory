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
var SqlInstancesAddServerCaPathParams = /** @class */ (function (_super) {
    __extends(SqlInstancesAddServerCaPathParams, _super);
    function SqlInstancesAddServerCaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], SqlInstancesAddServerCaPathParams.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], SqlInstancesAddServerCaPathParams.prototype, "project", void 0);
    return SqlInstancesAddServerCaPathParams;
}(SpeakeasyBase));
export { SqlInstancesAddServerCaPathParams };
var SqlInstancesAddServerCaQueryParams = /** @class */ (function (_super) {
    __extends(SqlInstancesAddServerCaQueryParams, _super);
    function SqlInstancesAddServerCaQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SqlInstancesAddServerCaQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SqlInstancesAddServerCaQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SqlInstancesAddServerCaQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SqlInstancesAddServerCaQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SqlInstancesAddServerCaQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SqlInstancesAddServerCaQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SqlInstancesAddServerCaQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SqlInstancesAddServerCaQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SqlInstancesAddServerCaQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SqlInstancesAddServerCaQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SqlInstancesAddServerCaQueryParams.prototype, "uploadProtocol", void 0);
    return SqlInstancesAddServerCaQueryParams;
}(SpeakeasyBase));
export { SqlInstancesAddServerCaQueryParams };
var SqlInstancesAddServerCaSecurityOption1 = /** @class */ (function (_super) {
    __extends(SqlInstancesAddServerCaSecurityOption1, _super);
    function SqlInstancesAddServerCaSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlInstancesAddServerCaSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlInstancesAddServerCaSecurityOption1.prototype, "oauth2c", void 0);
    return SqlInstancesAddServerCaSecurityOption1;
}(SpeakeasyBase));
export { SqlInstancesAddServerCaSecurityOption1 };
var SqlInstancesAddServerCaSecurityOption2 = /** @class */ (function (_super) {
    __extends(SqlInstancesAddServerCaSecurityOption2, _super);
    function SqlInstancesAddServerCaSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlInstancesAddServerCaSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlInstancesAddServerCaSecurityOption2.prototype, "oauth2c", void 0);
    return SqlInstancesAddServerCaSecurityOption2;
}(SpeakeasyBase));
export { SqlInstancesAddServerCaSecurityOption2 };
var SqlInstancesAddServerCaSecurity = /** @class */ (function (_super) {
    __extends(SqlInstancesAddServerCaSecurity, _super);
    function SqlInstancesAddServerCaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlInstancesAddServerCaSecurityOption1)
    ], SqlInstancesAddServerCaSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlInstancesAddServerCaSecurityOption2)
    ], SqlInstancesAddServerCaSecurity.prototype, "option2", void 0);
    return SqlInstancesAddServerCaSecurity;
}(SpeakeasyBase));
export { SqlInstancesAddServerCaSecurity };
var SqlInstancesAddServerCaRequest = /** @class */ (function (_super) {
    __extends(SqlInstancesAddServerCaRequest, _super);
    function SqlInstancesAddServerCaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesAddServerCaPathParams)
    ], SqlInstancesAddServerCaRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesAddServerCaQueryParams)
    ], SqlInstancesAddServerCaRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesAddServerCaSecurity)
    ], SqlInstancesAddServerCaRequest.prototype, "security", void 0);
    return SqlInstancesAddServerCaRequest;
}(SpeakeasyBase));
export { SqlInstancesAddServerCaRequest };
var SqlInstancesAddServerCaResponse = /** @class */ (function (_super) {
    __extends(SqlInstancesAddServerCaResponse, _super);
    function SqlInstancesAddServerCaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SqlInstancesAddServerCaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], SqlInstancesAddServerCaResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SqlInstancesAddServerCaResponse.prototype, "statusCode", void 0);
    return SqlInstancesAddServerCaResponse;
}(SpeakeasyBase));
export { SqlInstancesAddServerCaResponse };
