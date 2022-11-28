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
var VisionFilesAsyncBatchAnnotateQueryParams = /** @class */ (function (_super) {
    __extends(VisionFilesAsyncBatchAnnotateQueryParams, _super);
    function VisionFilesAsyncBatchAnnotateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VisionFilesAsyncBatchAnnotateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VisionFilesAsyncBatchAnnotateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VisionFilesAsyncBatchAnnotateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VisionFilesAsyncBatchAnnotateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VisionFilesAsyncBatchAnnotateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VisionFilesAsyncBatchAnnotateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VisionFilesAsyncBatchAnnotateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VisionFilesAsyncBatchAnnotateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VisionFilesAsyncBatchAnnotateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VisionFilesAsyncBatchAnnotateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VisionFilesAsyncBatchAnnotateQueryParams.prototype, "uploadProtocol", void 0);
    return VisionFilesAsyncBatchAnnotateQueryParams;
}(SpeakeasyBase));
export { VisionFilesAsyncBatchAnnotateQueryParams };
var VisionFilesAsyncBatchAnnotateSecurityOption1 = /** @class */ (function (_super) {
    __extends(VisionFilesAsyncBatchAnnotateSecurityOption1, _super);
    function VisionFilesAsyncBatchAnnotateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionFilesAsyncBatchAnnotateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionFilesAsyncBatchAnnotateSecurityOption1.prototype, "oauth2c", void 0);
    return VisionFilesAsyncBatchAnnotateSecurityOption1;
}(SpeakeasyBase));
export { VisionFilesAsyncBatchAnnotateSecurityOption1 };
var VisionFilesAsyncBatchAnnotateSecurityOption2 = /** @class */ (function (_super) {
    __extends(VisionFilesAsyncBatchAnnotateSecurityOption2, _super);
    function VisionFilesAsyncBatchAnnotateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionFilesAsyncBatchAnnotateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionFilesAsyncBatchAnnotateSecurityOption2.prototype, "oauth2c", void 0);
    return VisionFilesAsyncBatchAnnotateSecurityOption2;
}(SpeakeasyBase));
export { VisionFilesAsyncBatchAnnotateSecurityOption2 };
var VisionFilesAsyncBatchAnnotateSecurity = /** @class */ (function (_super) {
    __extends(VisionFilesAsyncBatchAnnotateSecurity, _super);
    function VisionFilesAsyncBatchAnnotateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionFilesAsyncBatchAnnotateSecurityOption1)
    ], VisionFilesAsyncBatchAnnotateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionFilesAsyncBatchAnnotateSecurityOption2)
    ], VisionFilesAsyncBatchAnnotateSecurity.prototype, "option2", void 0);
    return VisionFilesAsyncBatchAnnotateSecurity;
}(SpeakeasyBase));
export { VisionFilesAsyncBatchAnnotateSecurity };
var VisionFilesAsyncBatchAnnotateRequest = /** @class */ (function (_super) {
    __extends(VisionFilesAsyncBatchAnnotateRequest, _super);
    function VisionFilesAsyncBatchAnnotateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionFilesAsyncBatchAnnotateQueryParams)
    ], VisionFilesAsyncBatchAnnotateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest)
    ], VisionFilesAsyncBatchAnnotateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionFilesAsyncBatchAnnotateSecurity)
    ], VisionFilesAsyncBatchAnnotateRequest.prototype, "security", void 0);
    return VisionFilesAsyncBatchAnnotateRequest;
}(SpeakeasyBase));
export { VisionFilesAsyncBatchAnnotateRequest };
var VisionFilesAsyncBatchAnnotateResponse = /** @class */ (function (_super) {
    __extends(VisionFilesAsyncBatchAnnotateResponse, _super);
    function VisionFilesAsyncBatchAnnotateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VisionFilesAsyncBatchAnnotateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], VisionFilesAsyncBatchAnnotateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VisionFilesAsyncBatchAnnotateResponse.prototype, "statusCode", void 0);
    return VisionFilesAsyncBatchAnnotateResponse;
}(SpeakeasyBase));
export { VisionFilesAsyncBatchAnnotateResponse };
