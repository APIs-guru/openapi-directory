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
var VisionProjectsLocationsProductSetsCreatePathParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsCreatePathParams, _super);
    function VisionProjectsLocationsProductSetsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsCreatePathParams.prototype, "parent", void 0);
    return VisionProjectsLocationsProductSetsCreatePathParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsCreatePathParams };
var VisionProjectsLocationsProductSetsCreateQueryParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsCreateQueryParams, _super);
    function VisionProjectsLocationsProductSetsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VisionProjectsLocationsProductSetsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=productSetId" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsCreateQueryParams.prototype, "productSetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return VisionProjectsLocationsProductSetsCreateQueryParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsCreateQueryParams };
var VisionProjectsLocationsProductSetsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsCreateSecurityOption1, _super);
    function VisionProjectsLocationsProductSetsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsProductSetsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsProductSetsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsProductSetsCreateSecurityOption1;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsCreateSecurityOption1 };
var VisionProjectsLocationsProductSetsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsCreateSecurityOption2, _super);
    function VisionProjectsLocationsProductSetsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsProductSetsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsProductSetsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsProductSetsCreateSecurityOption2;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsCreateSecurityOption2 };
var VisionProjectsLocationsProductSetsCreateSecurity = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsCreateSecurity, _super);
    function VisionProjectsLocationsProductSetsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsProductSetsCreateSecurityOption1)
    ], VisionProjectsLocationsProductSetsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsProductSetsCreateSecurityOption2)
    ], VisionProjectsLocationsProductSetsCreateSecurity.prototype, "option2", void 0);
    return VisionProjectsLocationsProductSetsCreateSecurity;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsCreateSecurity };
var VisionProjectsLocationsProductSetsCreateRequest = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsCreateRequest, _super);
    function VisionProjectsLocationsProductSetsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductSetsCreatePathParams)
    ], VisionProjectsLocationsProductSetsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductSetsCreateQueryParams)
    ], VisionProjectsLocationsProductSetsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ProductSetInput)
    ], VisionProjectsLocationsProductSetsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductSetsCreateSecurity)
    ], VisionProjectsLocationsProductSetsCreateRequest.prototype, "security", void 0);
    return VisionProjectsLocationsProductSetsCreateRequest;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsCreateRequest };
var VisionProjectsLocationsProductSetsCreateResponse = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsCreateResponse, _super);
    function VisionProjectsLocationsProductSetsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ProductSet)
    ], VisionProjectsLocationsProductSetsCreateResponse.prototype, "productSet", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VisionProjectsLocationsProductSetsCreateResponse.prototype, "statusCode", void 0);
    return VisionProjectsLocationsProductSetsCreateResponse;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsCreateResponse };
