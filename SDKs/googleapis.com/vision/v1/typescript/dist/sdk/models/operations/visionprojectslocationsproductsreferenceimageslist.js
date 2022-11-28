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
var VisionProjectsLocationsProductsReferenceImagesListPathParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductsReferenceImagesListPathParams, _super);
    function VisionProjectsLocationsProductsReferenceImagesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsReferenceImagesListPathParams.prototype, "parent", void 0);
    return VisionProjectsLocationsProductsReferenceImagesListPathParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductsReferenceImagesListPathParams };
var VisionProjectsLocationsProductsReferenceImagesListQueryParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductsReferenceImagesListQueryParams, _super);
    function VisionProjectsLocationsProductsReferenceImagesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsReferenceImagesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsReferenceImagesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsReferenceImagesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsReferenceImagesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsReferenceImagesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsReferenceImagesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsReferenceImagesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], VisionProjectsLocationsProductsReferenceImagesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsReferenceImagesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VisionProjectsLocationsProductsReferenceImagesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsReferenceImagesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsReferenceImagesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsReferenceImagesListQueryParams.prototype, "uploadProtocol", void 0);
    return VisionProjectsLocationsProductsReferenceImagesListQueryParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductsReferenceImagesListQueryParams };
var VisionProjectsLocationsProductsReferenceImagesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductsReferenceImagesListSecurityOption1, _super);
    function VisionProjectsLocationsProductsReferenceImagesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsProductsReferenceImagesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsProductsReferenceImagesListSecurityOption1.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsProductsReferenceImagesListSecurityOption1;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductsReferenceImagesListSecurityOption1 };
var VisionProjectsLocationsProductsReferenceImagesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductsReferenceImagesListSecurityOption2, _super);
    function VisionProjectsLocationsProductsReferenceImagesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsProductsReferenceImagesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsProductsReferenceImagesListSecurityOption2.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsProductsReferenceImagesListSecurityOption2;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductsReferenceImagesListSecurityOption2 };
var VisionProjectsLocationsProductsReferenceImagesListSecurity = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductsReferenceImagesListSecurity, _super);
    function VisionProjectsLocationsProductsReferenceImagesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsProductsReferenceImagesListSecurityOption1)
    ], VisionProjectsLocationsProductsReferenceImagesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsProductsReferenceImagesListSecurityOption2)
    ], VisionProjectsLocationsProductsReferenceImagesListSecurity.prototype, "option2", void 0);
    return VisionProjectsLocationsProductsReferenceImagesListSecurity;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductsReferenceImagesListSecurity };
var VisionProjectsLocationsProductsReferenceImagesListRequest = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductsReferenceImagesListRequest, _super);
    function VisionProjectsLocationsProductsReferenceImagesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductsReferenceImagesListPathParams)
    ], VisionProjectsLocationsProductsReferenceImagesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductsReferenceImagesListQueryParams)
    ], VisionProjectsLocationsProductsReferenceImagesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductsReferenceImagesListSecurity)
    ], VisionProjectsLocationsProductsReferenceImagesListRequest.prototype, "security", void 0);
    return VisionProjectsLocationsProductsReferenceImagesListRequest;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductsReferenceImagesListRequest };
var VisionProjectsLocationsProductsReferenceImagesListResponse = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductsReferenceImagesListResponse, _super);
    function VisionProjectsLocationsProductsReferenceImagesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsReferenceImagesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListReferenceImagesResponse)
    ], VisionProjectsLocationsProductsReferenceImagesListResponse.prototype, "listReferenceImagesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VisionProjectsLocationsProductsReferenceImagesListResponse.prototype, "statusCode", void 0);
    return VisionProjectsLocationsProductsReferenceImagesListResponse;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductsReferenceImagesListResponse };
