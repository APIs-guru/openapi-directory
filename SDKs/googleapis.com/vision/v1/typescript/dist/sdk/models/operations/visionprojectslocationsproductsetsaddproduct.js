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
var VisionProjectsLocationsProductSetsAddProductPathParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsAddProductPathParams, _super);
    function VisionProjectsLocationsProductSetsAddProductPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsAddProductPathParams.prototype, "name", void 0);
    return VisionProjectsLocationsProductSetsAddProductPathParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsAddProductPathParams };
var VisionProjectsLocationsProductSetsAddProductQueryParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsAddProductQueryParams, _super);
    function VisionProjectsLocationsProductSetsAddProductQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsAddProductQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsAddProductQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsAddProductQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsAddProductQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsAddProductQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsAddProductQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsAddProductQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VisionProjectsLocationsProductSetsAddProductQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsAddProductQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsAddProductQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsAddProductQueryParams.prototype, "uploadProtocol", void 0);
    return VisionProjectsLocationsProductSetsAddProductQueryParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsAddProductQueryParams };
var VisionProjectsLocationsProductSetsAddProductSecurityOption1 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsAddProductSecurityOption1, _super);
    function VisionProjectsLocationsProductSetsAddProductSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsProductSetsAddProductSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsProductSetsAddProductSecurityOption1.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsProductSetsAddProductSecurityOption1;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsAddProductSecurityOption1 };
var VisionProjectsLocationsProductSetsAddProductSecurityOption2 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsAddProductSecurityOption2, _super);
    function VisionProjectsLocationsProductSetsAddProductSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsProductSetsAddProductSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsProductSetsAddProductSecurityOption2.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsProductSetsAddProductSecurityOption2;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsAddProductSecurityOption2 };
var VisionProjectsLocationsProductSetsAddProductSecurity = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsAddProductSecurity, _super);
    function VisionProjectsLocationsProductSetsAddProductSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsProductSetsAddProductSecurityOption1)
    ], VisionProjectsLocationsProductSetsAddProductSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsProductSetsAddProductSecurityOption2)
    ], VisionProjectsLocationsProductSetsAddProductSecurity.prototype, "option2", void 0);
    return VisionProjectsLocationsProductSetsAddProductSecurity;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsAddProductSecurity };
var VisionProjectsLocationsProductSetsAddProductRequest = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsAddProductRequest, _super);
    function VisionProjectsLocationsProductSetsAddProductRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductSetsAddProductPathParams)
    ], VisionProjectsLocationsProductSetsAddProductRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductSetsAddProductQueryParams)
    ], VisionProjectsLocationsProductSetsAddProductRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AddProductToProductSetRequest)
    ], VisionProjectsLocationsProductSetsAddProductRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductSetsAddProductSecurity)
    ], VisionProjectsLocationsProductSetsAddProductRequest.prototype, "security", void 0);
    return VisionProjectsLocationsProductSetsAddProductRequest;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsAddProductRequest };
var VisionProjectsLocationsProductSetsAddProductResponse = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsAddProductResponse, _super);
    function VisionProjectsLocationsProductSetsAddProductResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsAddProductResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], VisionProjectsLocationsProductSetsAddProductResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VisionProjectsLocationsProductSetsAddProductResponse.prototype, "statusCode", void 0);
    return VisionProjectsLocationsProductSetsAddProductResponse;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsAddProductResponse };
