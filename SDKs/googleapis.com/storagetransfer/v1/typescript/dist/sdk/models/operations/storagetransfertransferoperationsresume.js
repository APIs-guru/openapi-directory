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
var StoragetransferTransferOperationsResumePathParams = /** @class */ (function (_super) {
    __extends(StoragetransferTransferOperationsResumePathParams, _super);
    function StoragetransferTransferOperationsResumePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], StoragetransferTransferOperationsResumePathParams.prototype, "name", void 0);
    return StoragetransferTransferOperationsResumePathParams;
}(SpeakeasyBase));
export { StoragetransferTransferOperationsResumePathParams };
var StoragetransferTransferOperationsResumeQueryParams = /** @class */ (function (_super) {
    __extends(StoragetransferTransferOperationsResumeQueryParams, _super);
    function StoragetransferTransferOperationsResumeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], StoragetransferTransferOperationsResumeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], StoragetransferTransferOperationsResumeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], StoragetransferTransferOperationsResumeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], StoragetransferTransferOperationsResumeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], StoragetransferTransferOperationsResumeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], StoragetransferTransferOperationsResumeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], StoragetransferTransferOperationsResumeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], StoragetransferTransferOperationsResumeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], StoragetransferTransferOperationsResumeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], StoragetransferTransferOperationsResumeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], StoragetransferTransferOperationsResumeQueryParams.prototype, "uploadProtocol", void 0);
    return StoragetransferTransferOperationsResumeQueryParams;
}(SpeakeasyBase));
export { StoragetransferTransferOperationsResumeQueryParams };
var StoragetransferTransferOperationsResumeSecurity = /** @class */ (function (_super) {
    __extends(StoragetransferTransferOperationsResumeSecurity, _super);
    function StoragetransferTransferOperationsResumeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], StoragetransferTransferOperationsResumeSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], StoragetransferTransferOperationsResumeSecurity.prototype, "oauth2c", void 0);
    return StoragetransferTransferOperationsResumeSecurity;
}(SpeakeasyBase));
export { StoragetransferTransferOperationsResumeSecurity };
var StoragetransferTransferOperationsResumeRequest = /** @class */ (function (_super) {
    __extends(StoragetransferTransferOperationsResumeRequest, _super);
    function StoragetransferTransferOperationsResumeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoragetransferTransferOperationsResumePathParams)
    ], StoragetransferTransferOperationsResumeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoragetransferTransferOperationsResumeQueryParams)
    ], StoragetransferTransferOperationsResumeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], StoragetransferTransferOperationsResumeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", StoragetransferTransferOperationsResumeSecurity)
    ], StoragetransferTransferOperationsResumeRequest.prototype, "security", void 0);
    return StoragetransferTransferOperationsResumeRequest;
}(SpeakeasyBase));
export { StoragetransferTransferOperationsResumeRequest };
var StoragetransferTransferOperationsResumeResponse = /** @class */ (function (_super) {
    __extends(StoragetransferTransferOperationsResumeResponse, _super);
    function StoragetransferTransferOperationsResumeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], StoragetransferTransferOperationsResumeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], StoragetransferTransferOperationsResumeResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], StoragetransferTransferOperationsResumeResponse.prototype, "statusCode", void 0);
    return StoragetransferTransferOperationsResumeResponse;
}(SpeakeasyBase));
export { StoragetransferTransferOperationsResumeResponse };
