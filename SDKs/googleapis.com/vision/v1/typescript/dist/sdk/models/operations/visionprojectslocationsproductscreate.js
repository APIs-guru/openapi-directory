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
var VisionProjectsLocationsProductsCreatePathParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductsCreatePathParams, _super);
    function VisionProjectsLocationsProductsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsCreatePathParams.prototype, "parent", void 0);
    return VisionProjectsLocationsProductsCreatePathParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductsCreatePathParams };
var VisionProjectsLocationsProductsCreateQueryParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductsCreateQueryParams, _super);
    function VisionProjectsLocationsProductsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VisionProjectsLocationsProductsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=productId" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsCreateQueryParams.prototype, "productId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return VisionProjectsLocationsProductsCreateQueryParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductsCreateQueryParams };
var VisionProjectsLocationsProductsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductsCreateSecurityOption1, _super);
    function VisionProjectsLocationsProductsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsProductsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsProductsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsProductsCreateSecurityOption1;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductsCreateSecurityOption1 };
var VisionProjectsLocationsProductsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductsCreateSecurityOption2, _super);
    function VisionProjectsLocationsProductsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsProductsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsProductsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsProductsCreateSecurityOption2;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductsCreateSecurityOption2 };
var VisionProjectsLocationsProductsCreateSecurity = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductsCreateSecurity, _super);
    function VisionProjectsLocationsProductsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsProductsCreateSecurityOption1)
    ], VisionProjectsLocationsProductsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsProductsCreateSecurityOption2)
    ], VisionProjectsLocationsProductsCreateSecurity.prototype, "option2", void 0);
    return VisionProjectsLocationsProductsCreateSecurity;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductsCreateSecurity };
var VisionProjectsLocationsProductsCreateRequest = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductsCreateRequest, _super);
    function VisionProjectsLocationsProductsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductsCreatePathParams)
    ], VisionProjectsLocationsProductsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductsCreateQueryParams)
    ], VisionProjectsLocationsProductsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Product)
    ], VisionProjectsLocationsProductsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductsCreateSecurity)
    ], VisionProjectsLocationsProductsCreateRequest.prototype, "security", void 0);
    return VisionProjectsLocationsProductsCreateRequest;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductsCreateRequest };
var VisionProjectsLocationsProductsCreateResponse = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductsCreateResponse, _super);
    function VisionProjectsLocationsProductsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Product)
    ], VisionProjectsLocationsProductsCreateResponse.prototype, "product", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VisionProjectsLocationsProductsCreateResponse.prototype, "statusCode", void 0);
    return VisionProjectsLocationsProductsCreateResponse;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductsCreateResponse };
