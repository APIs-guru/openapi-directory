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
var VisionProjectsLocationsImagesAsyncBatchAnnotatePathParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsImagesAsyncBatchAnnotatePathParams, _super);
    function VisionProjectsLocationsImagesAsyncBatchAnnotatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsImagesAsyncBatchAnnotatePathParams.prototype, "parent", void 0);
    return VisionProjectsLocationsImagesAsyncBatchAnnotatePathParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsImagesAsyncBatchAnnotatePathParams };
var VisionProjectsLocationsImagesAsyncBatchAnnotateQueryParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsImagesAsyncBatchAnnotateQueryParams, _super);
    function VisionProjectsLocationsImagesAsyncBatchAnnotateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsImagesAsyncBatchAnnotateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsImagesAsyncBatchAnnotateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsImagesAsyncBatchAnnotateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsImagesAsyncBatchAnnotateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsImagesAsyncBatchAnnotateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsImagesAsyncBatchAnnotateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsImagesAsyncBatchAnnotateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VisionProjectsLocationsImagesAsyncBatchAnnotateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsImagesAsyncBatchAnnotateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsImagesAsyncBatchAnnotateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsImagesAsyncBatchAnnotateQueryParams.prototype, "uploadProtocol", void 0);
    return VisionProjectsLocationsImagesAsyncBatchAnnotateQueryParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsImagesAsyncBatchAnnotateQueryParams };
var VisionProjectsLocationsImagesAsyncBatchAnnotateSecurityOption1 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsImagesAsyncBatchAnnotateSecurityOption1, _super);
    function VisionProjectsLocationsImagesAsyncBatchAnnotateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsImagesAsyncBatchAnnotateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsImagesAsyncBatchAnnotateSecurityOption1.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsImagesAsyncBatchAnnotateSecurityOption1;
}(SpeakeasyBase));
export { VisionProjectsLocationsImagesAsyncBatchAnnotateSecurityOption1 };
var VisionProjectsLocationsImagesAsyncBatchAnnotateSecurityOption2 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsImagesAsyncBatchAnnotateSecurityOption2, _super);
    function VisionProjectsLocationsImagesAsyncBatchAnnotateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsImagesAsyncBatchAnnotateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsImagesAsyncBatchAnnotateSecurityOption2.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsImagesAsyncBatchAnnotateSecurityOption2;
}(SpeakeasyBase));
export { VisionProjectsLocationsImagesAsyncBatchAnnotateSecurityOption2 };
var VisionProjectsLocationsImagesAsyncBatchAnnotateSecurity = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsImagesAsyncBatchAnnotateSecurity, _super);
    function VisionProjectsLocationsImagesAsyncBatchAnnotateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsImagesAsyncBatchAnnotateSecurityOption1)
    ], VisionProjectsLocationsImagesAsyncBatchAnnotateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsImagesAsyncBatchAnnotateSecurityOption2)
    ], VisionProjectsLocationsImagesAsyncBatchAnnotateSecurity.prototype, "option2", void 0);
    return VisionProjectsLocationsImagesAsyncBatchAnnotateSecurity;
}(SpeakeasyBase));
export { VisionProjectsLocationsImagesAsyncBatchAnnotateSecurity };
var VisionProjectsLocationsImagesAsyncBatchAnnotateRequest = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsImagesAsyncBatchAnnotateRequest, _super);
    function VisionProjectsLocationsImagesAsyncBatchAnnotateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsImagesAsyncBatchAnnotatePathParams)
    ], VisionProjectsLocationsImagesAsyncBatchAnnotateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsImagesAsyncBatchAnnotateQueryParams)
    ], VisionProjectsLocationsImagesAsyncBatchAnnotateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudVisionV1p1beta1AsyncBatchAnnotateImagesRequest)
    ], VisionProjectsLocationsImagesAsyncBatchAnnotateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsImagesAsyncBatchAnnotateSecurity)
    ], VisionProjectsLocationsImagesAsyncBatchAnnotateRequest.prototype, "security", void 0);
    return VisionProjectsLocationsImagesAsyncBatchAnnotateRequest;
}(SpeakeasyBase));
export { VisionProjectsLocationsImagesAsyncBatchAnnotateRequest };
var VisionProjectsLocationsImagesAsyncBatchAnnotateResponse = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsImagesAsyncBatchAnnotateResponse, _super);
    function VisionProjectsLocationsImagesAsyncBatchAnnotateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VisionProjectsLocationsImagesAsyncBatchAnnotateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], VisionProjectsLocationsImagesAsyncBatchAnnotateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VisionProjectsLocationsImagesAsyncBatchAnnotateResponse.prototype, "statusCode", void 0);
    return VisionProjectsLocationsImagesAsyncBatchAnnotateResponse;
}(SpeakeasyBase));
export { VisionProjectsLocationsImagesAsyncBatchAnnotateResponse };
