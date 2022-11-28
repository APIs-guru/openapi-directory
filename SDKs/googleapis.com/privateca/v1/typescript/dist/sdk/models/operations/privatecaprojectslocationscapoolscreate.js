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
var PrivatecaProjectsLocationsCaPoolsCreatePathParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsCreatePathParams, _super);
    function PrivatecaProjectsLocationsCaPoolsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCreatePathParams.prototype, "parent", void 0);
    return PrivatecaProjectsLocationsCaPoolsCreatePathParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsCreatePathParams };
var PrivatecaProjectsLocationsCaPoolsCreateQueryParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsCreateQueryParams, _super);
    function PrivatecaProjectsLocationsCaPoolsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=caPoolId" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCreateQueryParams.prototype, "caPoolId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PrivatecaProjectsLocationsCaPoolsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return PrivatecaProjectsLocationsCaPoolsCreateQueryParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsCreateQueryParams };
var PrivatecaProjectsLocationsCaPoolsCreateSecurity = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsCreateSecurity, _super);
    function PrivatecaProjectsLocationsCaPoolsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PrivatecaProjectsLocationsCaPoolsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PrivatecaProjectsLocationsCaPoolsCreateSecurity.prototype, "oauth2c", void 0);
    return PrivatecaProjectsLocationsCaPoolsCreateSecurity;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsCreateSecurity };
var PrivatecaProjectsLocationsCaPoolsCreateRequest = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsCreateRequest, _super);
    function PrivatecaProjectsLocationsCaPoolsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCaPoolsCreatePathParams)
    ], PrivatecaProjectsLocationsCaPoolsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCaPoolsCreateQueryParams)
    ], PrivatecaProjectsLocationsCaPoolsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CaPoolInput)
    ], PrivatecaProjectsLocationsCaPoolsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCaPoolsCreateSecurity)
    ], PrivatecaProjectsLocationsCaPoolsCreateRequest.prototype, "security", void 0);
    return PrivatecaProjectsLocationsCaPoolsCreateRequest;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsCreateRequest };
var PrivatecaProjectsLocationsCaPoolsCreateResponse = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCaPoolsCreateResponse, _super);
    function PrivatecaProjectsLocationsCaPoolsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCaPoolsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], PrivatecaProjectsLocationsCaPoolsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PrivatecaProjectsLocationsCaPoolsCreateResponse.prototype, "statusCode", void 0);
    return PrivatecaProjectsLocationsCaPoolsCreateResponse;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCaPoolsCreateResponse };
