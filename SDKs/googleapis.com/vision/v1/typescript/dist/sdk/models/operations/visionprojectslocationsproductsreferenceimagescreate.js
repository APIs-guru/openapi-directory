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
var VisionProjectsLocationsProductsReferenceImagesCreatePathParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductsReferenceImagesCreatePathParams, _super);
    function VisionProjectsLocationsProductsReferenceImagesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsReferenceImagesCreatePathParams.prototype, "parent", void 0);
    return VisionProjectsLocationsProductsReferenceImagesCreatePathParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductsReferenceImagesCreatePathParams };
var VisionProjectsLocationsProductsReferenceImagesCreateQueryParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductsReferenceImagesCreateQueryParams, _super);
    function VisionProjectsLocationsProductsReferenceImagesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsReferenceImagesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsReferenceImagesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsReferenceImagesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsReferenceImagesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsReferenceImagesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsReferenceImagesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsReferenceImagesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VisionProjectsLocationsProductsReferenceImagesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsReferenceImagesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=referenceImageId" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsReferenceImagesCreateQueryParams.prototype, "referenceImageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsReferenceImagesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsReferenceImagesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return VisionProjectsLocationsProductsReferenceImagesCreateQueryParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductsReferenceImagesCreateQueryParams };
var VisionProjectsLocationsProductsReferenceImagesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductsReferenceImagesCreateSecurityOption1, _super);
    function VisionProjectsLocationsProductsReferenceImagesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsProductsReferenceImagesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsProductsReferenceImagesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsProductsReferenceImagesCreateSecurityOption1;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductsReferenceImagesCreateSecurityOption1 };
var VisionProjectsLocationsProductsReferenceImagesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductsReferenceImagesCreateSecurityOption2, _super);
    function VisionProjectsLocationsProductsReferenceImagesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsProductsReferenceImagesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsProductsReferenceImagesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsProductsReferenceImagesCreateSecurityOption2;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductsReferenceImagesCreateSecurityOption2 };
var VisionProjectsLocationsProductsReferenceImagesCreateSecurity = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductsReferenceImagesCreateSecurity, _super);
    function VisionProjectsLocationsProductsReferenceImagesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsProductsReferenceImagesCreateSecurityOption1)
    ], VisionProjectsLocationsProductsReferenceImagesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsProductsReferenceImagesCreateSecurityOption2)
    ], VisionProjectsLocationsProductsReferenceImagesCreateSecurity.prototype, "option2", void 0);
    return VisionProjectsLocationsProductsReferenceImagesCreateSecurity;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductsReferenceImagesCreateSecurity };
var VisionProjectsLocationsProductsReferenceImagesCreateRequest = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductsReferenceImagesCreateRequest, _super);
    function VisionProjectsLocationsProductsReferenceImagesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductsReferenceImagesCreatePathParams)
    ], VisionProjectsLocationsProductsReferenceImagesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductsReferenceImagesCreateQueryParams)
    ], VisionProjectsLocationsProductsReferenceImagesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ReferenceImage)
    ], VisionProjectsLocationsProductsReferenceImagesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductsReferenceImagesCreateSecurity)
    ], VisionProjectsLocationsProductsReferenceImagesCreateRequest.prototype, "security", void 0);
    return VisionProjectsLocationsProductsReferenceImagesCreateRequest;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductsReferenceImagesCreateRequest };
var VisionProjectsLocationsProductsReferenceImagesCreateResponse = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductsReferenceImagesCreateResponse, _super);
    function VisionProjectsLocationsProductsReferenceImagesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsReferenceImagesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ReferenceImage)
    ], VisionProjectsLocationsProductsReferenceImagesCreateResponse.prototype, "referenceImage", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VisionProjectsLocationsProductsReferenceImagesCreateResponse.prototype, "statusCode", void 0);
    return VisionProjectsLocationsProductsReferenceImagesCreateResponse;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductsReferenceImagesCreateResponse };
