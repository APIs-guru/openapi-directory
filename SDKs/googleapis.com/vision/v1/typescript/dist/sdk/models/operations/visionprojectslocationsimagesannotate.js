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
var VisionProjectsLocationsImagesAnnotatePathParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsImagesAnnotatePathParams, _super);
    function VisionProjectsLocationsImagesAnnotatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsImagesAnnotatePathParams.prototype, "parent", void 0);
    return VisionProjectsLocationsImagesAnnotatePathParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsImagesAnnotatePathParams };
var VisionProjectsLocationsImagesAnnotateQueryParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsImagesAnnotateQueryParams, _super);
    function VisionProjectsLocationsImagesAnnotateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsImagesAnnotateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsImagesAnnotateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsImagesAnnotateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsImagesAnnotateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsImagesAnnotateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsImagesAnnotateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsImagesAnnotateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VisionProjectsLocationsImagesAnnotateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsImagesAnnotateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsImagesAnnotateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsImagesAnnotateQueryParams.prototype, "uploadProtocol", void 0);
    return VisionProjectsLocationsImagesAnnotateQueryParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsImagesAnnotateQueryParams };
var VisionProjectsLocationsImagesAnnotateSecurityOption1 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsImagesAnnotateSecurityOption1, _super);
    function VisionProjectsLocationsImagesAnnotateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsImagesAnnotateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsImagesAnnotateSecurityOption1.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsImagesAnnotateSecurityOption1;
}(SpeakeasyBase));
export { VisionProjectsLocationsImagesAnnotateSecurityOption1 };
var VisionProjectsLocationsImagesAnnotateSecurityOption2 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsImagesAnnotateSecurityOption2, _super);
    function VisionProjectsLocationsImagesAnnotateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsImagesAnnotateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsImagesAnnotateSecurityOption2.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsImagesAnnotateSecurityOption2;
}(SpeakeasyBase));
export { VisionProjectsLocationsImagesAnnotateSecurityOption2 };
var VisionProjectsLocationsImagesAnnotateSecurity = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsImagesAnnotateSecurity, _super);
    function VisionProjectsLocationsImagesAnnotateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsImagesAnnotateSecurityOption1)
    ], VisionProjectsLocationsImagesAnnotateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsImagesAnnotateSecurityOption2)
    ], VisionProjectsLocationsImagesAnnotateSecurity.prototype, "option2", void 0);
    return VisionProjectsLocationsImagesAnnotateSecurity;
}(SpeakeasyBase));
export { VisionProjectsLocationsImagesAnnotateSecurity };
var VisionProjectsLocationsImagesAnnotateRequest = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsImagesAnnotateRequest, _super);
    function VisionProjectsLocationsImagesAnnotateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsImagesAnnotatePathParams)
    ], VisionProjectsLocationsImagesAnnotateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsImagesAnnotateQueryParams)
    ], VisionProjectsLocationsImagesAnnotateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchAnnotateImagesRequest)
    ], VisionProjectsLocationsImagesAnnotateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsImagesAnnotateSecurity)
    ], VisionProjectsLocationsImagesAnnotateRequest.prototype, "security", void 0);
    return VisionProjectsLocationsImagesAnnotateRequest;
}(SpeakeasyBase));
export { VisionProjectsLocationsImagesAnnotateRequest };
var VisionProjectsLocationsImagesAnnotateResponse = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsImagesAnnotateResponse, _super);
    function VisionProjectsLocationsImagesAnnotateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchAnnotateImagesResponse)
    ], VisionProjectsLocationsImagesAnnotateResponse.prototype, "batchAnnotateImagesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VisionProjectsLocationsImagesAnnotateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VisionProjectsLocationsImagesAnnotateResponse.prototype, "statusCode", void 0);
    return VisionProjectsLocationsImagesAnnotateResponse;
}(SpeakeasyBase));
export { VisionProjectsLocationsImagesAnnotateResponse };
