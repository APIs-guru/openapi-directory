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
var VisionProjectsLocationsFilesAsyncBatchAnnotatePathParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsFilesAsyncBatchAnnotatePathParams, _super);
    function VisionProjectsLocationsFilesAsyncBatchAnnotatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsFilesAsyncBatchAnnotatePathParams.prototype, "parent", void 0);
    return VisionProjectsLocationsFilesAsyncBatchAnnotatePathParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsFilesAsyncBatchAnnotatePathParams };
var VisionProjectsLocationsFilesAsyncBatchAnnotateQueryParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsFilesAsyncBatchAnnotateQueryParams, _super);
    function VisionProjectsLocationsFilesAsyncBatchAnnotateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsFilesAsyncBatchAnnotateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsFilesAsyncBatchAnnotateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsFilesAsyncBatchAnnotateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsFilesAsyncBatchAnnotateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsFilesAsyncBatchAnnotateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsFilesAsyncBatchAnnotateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsFilesAsyncBatchAnnotateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VisionProjectsLocationsFilesAsyncBatchAnnotateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsFilesAsyncBatchAnnotateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsFilesAsyncBatchAnnotateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsFilesAsyncBatchAnnotateQueryParams.prototype, "uploadProtocol", void 0);
    return VisionProjectsLocationsFilesAsyncBatchAnnotateQueryParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsFilesAsyncBatchAnnotateQueryParams };
var VisionProjectsLocationsFilesAsyncBatchAnnotateSecurityOption1 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsFilesAsyncBatchAnnotateSecurityOption1, _super);
    function VisionProjectsLocationsFilesAsyncBatchAnnotateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsFilesAsyncBatchAnnotateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsFilesAsyncBatchAnnotateSecurityOption1.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsFilesAsyncBatchAnnotateSecurityOption1;
}(SpeakeasyBase));
export { VisionProjectsLocationsFilesAsyncBatchAnnotateSecurityOption1 };
var VisionProjectsLocationsFilesAsyncBatchAnnotateSecurityOption2 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsFilesAsyncBatchAnnotateSecurityOption2, _super);
    function VisionProjectsLocationsFilesAsyncBatchAnnotateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsFilesAsyncBatchAnnotateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsFilesAsyncBatchAnnotateSecurityOption2.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsFilesAsyncBatchAnnotateSecurityOption2;
}(SpeakeasyBase));
export { VisionProjectsLocationsFilesAsyncBatchAnnotateSecurityOption2 };
var VisionProjectsLocationsFilesAsyncBatchAnnotateSecurity = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsFilesAsyncBatchAnnotateSecurity, _super);
    function VisionProjectsLocationsFilesAsyncBatchAnnotateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsFilesAsyncBatchAnnotateSecurityOption1)
    ], VisionProjectsLocationsFilesAsyncBatchAnnotateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsFilesAsyncBatchAnnotateSecurityOption2)
    ], VisionProjectsLocationsFilesAsyncBatchAnnotateSecurity.prototype, "option2", void 0);
    return VisionProjectsLocationsFilesAsyncBatchAnnotateSecurity;
}(SpeakeasyBase));
export { VisionProjectsLocationsFilesAsyncBatchAnnotateSecurity };
var VisionProjectsLocationsFilesAsyncBatchAnnotateRequest = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsFilesAsyncBatchAnnotateRequest, _super);
    function VisionProjectsLocationsFilesAsyncBatchAnnotateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsFilesAsyncBatchAnnotatePathParams)
    ], VisionProjectsLocationsFilesAsyncBatchAnnotateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsFilesAsyncBatchAnnotateQueryParams)
    ], VisionProjectsLocationsFilesAsyncBatchAnnotateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudVisionV1p2beta1AsyncBatchAnnotateFilesRequest)
    ], VisionProjectsLocationsFilesAsyncBatchAnnotateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsFilesAsyncBatchAnnotateSecurity)
    ], VisionProjectsLocationsFilesAsyncBatchAnnotateRequest.prototype, "security", void 0);
    return VisionProjectsLocationsFilesAsyncBatchAnnotateRequest;
}(SpeakeasyBase));
export { VisionProjectsLocationsFilesAsyncBatchAnnotateRequest };
var VisionProjectsLocationsFilesAsyncBatchAnnotateResponse = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsFilesAsyncBatchAnnotateResponse, _super);
    function VisionProjectsLocationsFilesAsyncBatchAnnotateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VisionProjectsLocationsFilesAsyncBatchAnnotateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], VisionProjectsLocationsFilesAsyncBatchAnnotateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VisionProjectsLocationsFilesAsyncBatchAnnotateResponse.prototype, "statusCode", void 0);
    return VisionProjectsLocationsFilesAsyncBatchAnnotateResponse;
}(SpeakeasyBase));
export { VisionProjectsLocationsFilesAsyncBatchAnnotateResponse };
