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
var VisionImagesAsyncBatchAnnotateQueryParams = /** @class */ (function (_super) {
    __extends(VisionImagesAsyncBatchAnnotateQueryParams, _super);
    function VisionImagesAsyncBatchAnnotateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VisionImagesAsyncBatchAnnotateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VisionImagesAsyncBatchAnnotateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VisionImagesAsyncBatchAnnotateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VisionImagesAsyncBatchAnnotateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VisionImagesAsyncBatchAnnotateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VisionImagesAsyncBatchAnnotateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VisionImagesAsyncBatchAnnotateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VisionImagesAsyncBatchAnnotateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VisionImagesAsyncBatchAnnotateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VisionImagesAsyncBatchAnnotateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VisionImagesAsyncBatchAnnotateQueryParams.prototype, "uploadProtocol", void 0);
    return VisionImagesAsyncBatchAnnotateQueryParams;
}(SpeakeasyBase));
export { VisionImagesAsyncBatchAnnotateQueryParams };
var VisionImagesAsyncBatchAnnotateSecurityOption1 = /** @class */ (function (_super) {
    __extends(VisionImagesAsyncBatchAnnotateSecurityOption1, _super);
    function VisionImagesAsyncBatchAnnotateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionImagesAsyncBatchAnnotateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionImagesAsyncBatchAnnotateSecurityOption1.prototype, "oauth2c", void 0);
    return VisionImagesAsyncBatchAnnotateSecurityOption1;
}(SpeakeasyBase));
export { VisionImagesAsyncBatchAnnotateSecurityOption1 };
var VisionImagesAsyncBatchAnnotateSecurityOption2 = /** @class */ (function (_super) {
    __extends(VisionImagesAsyncBatchAnnotateSecurityOption2, _super);
    function VisionImagesAsyncBatchAnnotateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionImagesAsyncBatchAnnotateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionImagesAsyncBatchAnnotateSecurityOption2.prototype, "oauth2c", void 0);
    return VisionImagesAsyncBatchAnnotateSecurityOption2;
}(SpeakeasyBase));
export { VisionImagesAsyncBatchAnnotateSecurityOption2 };
var VisionImagesAsyncBatchAnnotateSecurity = /** @class */ (function (_super) {
    __extends(VisionImagesAsyncBatchAnnotateSecurity, _super);
    function VisionImagesAsyncBatchAnnotateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionImagesAsyncBatchAnnotateSecurityOption1)
    ], VisionImagesAsyncBatchAnnotateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionImagesAsyncBatchAnnotateSecurityOption2)
    ], VisionImagesAsyncBatchAnnotateSecurity.prototype, "option2", void 0);
    return VisionImagesAsyncBatchAnnotateSecurity;
}(SpeakeasyBase));
export { VisionImagesAsyncBatchAnnotateSecurity };
var VisionImagesAsyncBatchAnnotateRequest = /** @class */ (function (_super) {
    __extends(VisionImagesAsyncBatchAnnotateRequest, _super);
    function VisionImagesAsyncBatchAnnotateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionImagesAsyncBatchAnnotateQueryParams)
    ], VisionImagesAsyncBatchAnnotateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudVisionV1p2beta1AsyncBatchAnnotateImagesRequest)
    ], VisionImagesAsyncBatchAnnotateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionImagesAsyncBatchAnnotateSecurity)
    ], VisionImagesAsyncBatchAnnotateRequest.prototype, "security", void 0);
    return VisionImagesAsyncBatchAnnotateRequest;
}(SpeakeasyBase));
export { VisionImagesAsyncBatchAnnotateRequest };
var VisionImagesAsyncBatchAnnotateResponse = /** @class */ (function (_super) {
    __extends(VisionImagesAsyncBatchAnnotateResponse, _super);
    function VisionImagesAsyncBatchAnnotateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VisionImagesAsyncBatchAnnotateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], VisionImagesAsyncBatchAnnotateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VisionImagesAsyncBatchAnnotateResponse.prototype, "statusCode", void 0);
    return VisionImagesAsyncBatchAnnotateResponse;
}(SpeakeasyBase));
export { VisionImagesAsyncBatchAnnotateResponse };
