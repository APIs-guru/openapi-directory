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
var TranslateProjectsLocationsOperationsGetPathParams = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsOperationsGetPathParams, _super);
    function TranslateProjectsLocationsOperationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsGetPathParams.prototype, "name", void 0);
    return TranslateProjectsLocationsOperationsGetPathParams;
}(SpeakeasyBase));
export { TranslateProjectsLocationsOperationsGetPathParams };
var TranslateProjectsLocationsOperationsGetQueryParams = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsOperationsGetQueryParams, _super);
    function TranslateProjectsLocationsOperationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TranslateProjectsLocationsOperationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return TranslateProjectsLocationsOperationsGetQueryParams;
}(SpeakeasyBase));
export { TranslateProjectsLocationsOperationsGetQueryParams };
var TranslateProjectsLocationsOperationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsOperationsGetSecurityOption1, _super);
    function TranslateProjectsLocationsOperationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TranslateProjectsLocationsOperationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TranslateProjectsLocationsOperationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return TranslateProjectsLocationsOperationsGetSecurityOption1;
}(SpeakeasyBase));
export { TranslateProjectsLocationsOperationsGetSecurityOption1 };
var TranslateProjectsLocationsOperationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsOperationsGetSecurityOption2, _super);
    function TranslateProjectsLocationsOperationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TranslateProjectsLocationsOperationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TranslateProjectsLocationsOperationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return TranslateProjectsLocationsOperationsGetSecurityOption2;
}(SpeakeasyBase));
export { TranslateProjectsLocationsOperationsGetSecurityOption2 };
var TranslateProjectsLocationsOperationsGetSecurity = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsOperationsGetSecurity, _super);
    function TranslateProjectsLocationsOperationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TranslateProjectsLocationsOperationsGetSecurityOption1)
    ], TranslateProjectsLocationsOperationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TranslateProjectsLocationsOperationsGetSecurityOption2)
    ], TranslateProjectsLocationsOperationsGetSecurity.prototype, "option2", void 0);
    return TranslateProjectsLocationsOperationsGetSecurity;
}(SpeakeasyBase));
export { TranslateProjectsLocationsOperationsGetSecurity };
var TranslateProjectsLocationsOperationsGetRequest = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsOperationsGetRequest, _super);
    function TranslateProjectsLocationsOperationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsOperationsGetPathParams)
    ], TranslateProjectsLocationsOperationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsOperationsGetQueryParams)
    ], TranslateProjectsLocationsOperationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TranslateProjectsLocationsOperationsGetSecurity)
    ], TranslateProjectsLocationsOperationsGetRequest.prototype, "security", void 0);
    return TranslateProjectsLocationsOperationsGetRequest;
}(SpeakeasyBase));
export { TranslateProjectsLocationsOperationsGetRequest };
var TranslateProjectsLocationsOperationsGetResponse = /** @class */ (function (_super) {
    __extends(TranslateProjectsLocationsOperationsGetResponse, _super);
    function TranslateProjectsLocationsOperationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TranslateProjectsLocationsOperationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], TranslateProjectsLocationsOperationsGetResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TranslateProjectsLocationsOperationsGetResponse.prototype, "statusCode", void 0);
    return TranslateProjectsLocationsOperationsGetResponse;
}(SpeakeasyBase));
export { TranslateProjectsLocationsOperationsGetResponse };
