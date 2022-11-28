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
var ServicenetworkingOperationsGetPathParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingOperationsGetPathParams, _super);
    function ServicenetworkingOperationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ServicenetworkingOperationsGetPathParams.prototype, "name", void 0);
    return ServicenetworkingOperationsGetPathParams;
}(SpeakeasyBase));
export { ServicenetworkingOperationsGetPathParams };
var ServicenetworkingOperationsGetQueryParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingOperationsGetQueryParams, _super);
    function ServicenetworkingOperationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicenetworkingOperationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingOperationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicenetworkingOperationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicenetworkingOperationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicenetworkingOperationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicenetworkingOperationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingOperationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicenetworkingOperationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicenetworkingOperationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicenetworkingOperationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicenetworkingOperationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return ServicenetworkingOperationsGetQueryParams;
}(SpeakeasyBase));
export { ServicenetworkingOperationsGetQueryParams };
var ServicenetworkingOperationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicenetworkingOperationsGetSecurityOption1, _super);
    function ServicenetworkingOperationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingOperationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingOperationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return ServicenetworkingOperationsGetSecurityOption1;
}(SpeakeasyBase));
export { ServicenetworkingOperationsGetSecurityOption1 };
var ServicenetworkingOperationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicenetworkingOperationsGetSecurityOption2, _super);
    function ServicenetworkingOperationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingOperationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingOperationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return ServicenetworkingOperationsGetSecurityOption2;
}(SpeakeasyBase));
export { ServicenetworkingOperationsGetSecurityOption2 };
var ServicenetworkingOperationsGetSecurity = /** @class */ (function (_super) {
    __extends(ServicenetworkingOperationsGetSecurity, _super);
    function ServicenetworkingOperationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingOperationsGetSecurityOption1)
    ], ServicenetworkingOperationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingOperationsGetSecurityOption2)
    ], ServicenetworkingOperationsGetSecurity.prototype, "option2", void 0);
    return ServicenetworkingOperationsGetSecurity;
}(SpeakeasyBase));
export { ServicenetworkingOperationsGetSecurity };
var ServicenetworkingOperationsGetRequest = /** @class */ (function (_super) {
    __extends(ServicenetworkingOperationsGetRequest, _super);
    function ServicenetworkingOperationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingOperationsGetPathParams)
    ], ServicenetworkingOperationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingOperationsGetQueryParams)
    ], ServicenetworkingOperationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingOperationsGetSecurity)
    ], ServicenetworkingOperationsGetRequest.prototype, "security", void 0);
    return ServicenetworkingOperationsGetRequest;
}(SpeakeasyBase));
export { ServicenetworkingOperationsGetRequest };
var ServicenetworkingOperationsGetResponse = /** @class */ (function (_super) {
    __extends(ServicenetworkingOperationsGetResponse, _super);
    function ServicenetworkingOperationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicenetworkingOperationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ServicenetworkingOperationsGetResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicenetworkingOperationsGetResponse.prototype, "statusCode", void 0);
    return ServicenetworkingOperationsGetResponse;
}(SpeakeasyBase));
export { ServicenetworkingOperationsGetResponse };
