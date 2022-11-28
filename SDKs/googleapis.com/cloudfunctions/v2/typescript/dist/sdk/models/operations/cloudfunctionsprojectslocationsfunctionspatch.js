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
var CloudfunctionsProjectsLocationsFunctionsPatchPathParams = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsPatchPathParams, _super);
    function CloudfunctionsProjectsLocationsFunctionsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsPatchPathParams.prototype, "name", void 0);
    return CloudfunctionsProjectsLocationsFunctionsPatchPathParams;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsPatchPathParams };
var CloudfunctionsProjectsLocationsFunctionsPatchQueryParams = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsPatchQueryParams, _super);
    function CloudfunctionsProjectsLocationsFunctionsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudfunctionsProjectsLocationsFunctionsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return CloudfunctionsProjectsLocationsFunctionsPatchQueryParams;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsPatchQueryParams };
var CloudfunctionsProjectsLocationsFunctionsPatchSecurity = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsPatchSecurity, _super);
    function CloudfunctionsProjectsLocationsFunctionsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudfunctionsProjectsLocationsFunctionsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudfunctionsProjectsLocationsFunctionsPatchSecurity.prototype, "oauth2c", void 0);
    return CloudfunctionsProjectsLocationsFunctionsPatchSecurity;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsPatchSecurity };
var CloudfunctionsProjectsLocationsFunctionsPatchRequest = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsPatchRequest, _super);
    function CloudfunctionsProjectsLocationsFunctionsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudfunctionsProjectsLocationsFunctionsPatchPathParams)
    ], CloudfunctionsProjectsLocationsFunctionsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudfunctionsProjectsLocationsFunctionsPatchQueryParams)
    ], CloudfunctionsProjectsLocationsFunctionsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.FunctionInput)
    ], CloudfunctionsProjectsLocationsFunctionsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudfunctionsProjectsLocationsFunctionsPatchSecurity)
    ], CloudfunctionsProjectsLocationsFunctionsPatchRequest.prototype, "security", void 0);
    return CloudfunctionsProjectsLocationsFunctionsPatchRequest;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsPatchRequest };
var CloudfunctionsProjectsLocationsFunctionsPatchResponse = /** @class */ (function (_super) {
    __extends(CloudfunctionsProjectsLocationsFunctionsPatchResponse, _super);
    function CloudfunctionsProjectsLocationsFunctionsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudfunctionsProjectsLocationsFunctionsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], CloudfunctionsProjectsLocationsFunctionsPatchResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudfunctionsProjectsLocationsFunctionsPatchResponse.prototype, "statusCode", void 0);
    return CloudfunctionsProjectsLocationsFunctionsPatchResponse;
}(SpeakeasyBase));
export { CloudfunctionsProjectsLocationsFunctionsPatchResponse };
