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
var VisionProjectsLocationsProductSetsProductsListPathParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsProductsListPathParams, _super);
    function VisionProjectsLocationsProductSetsProductsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsProductsListPathParams.prototype, "name", void 0);
    return VisionProjectsLocationsProductSetsProductsListPathParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsProductsListPathParams };
var VisionProjectsLocationsProductSetsProductsListQueryParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsProductsListQueryParams, _super);
    function VisionProjectsLocationsProductSetsProductsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsProductsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsProductsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsProductsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsProductsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsProductsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsProductsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsProductsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], VisionProjectsLocationsProductSetsProductsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsProductsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VisionProjectsLocationsProductSetsProductsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsProductsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsProductsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsProductsListQueryParams.prototype, "uploadProtocol", void 0);
    return VisionProjectsLocationsProductSetsProductsListQueryParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsProductsListQueryParams };
var VisionProjectsLocationsProductSetsProductsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsProductsListSecurityOption1, _super);
    function VisionProjectsLocationsProductSetsProductsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsProductSetsProductsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsProductSetsProductsListSecurityOption1.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsProductSetsProductsListSecurityOption1;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsProductsListSecurityOption1 };
var VisionProjectsLocationsProductSetsProductsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsProductsListSecurityOption2, _super);
    function VisionProjectsLocationsProductSetsProductsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsProductSetsProductsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsProductSetsProductsListSecurityOption2.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsProductSetsProductsListSecurityOption2;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsProductsListSecurityOption2 };
var VisionProjectsLocationsProductSetsProductsListSecurity = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsProductsListSecurity, _super);
    function VisionProjectsLocationsProductSetsProductsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsProductSetsProductsListSecurityOption1)
    ], VisionProjectsLocationsProductSetsProductsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsProductSetsProductsListSecurityOption2)
    ], VisionProjectsLocationsProductSetsProductsListSecurity.prototype, "option2", void 0);
    return VisionProjectsLocationsProductSetsProductsListSecurity;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsProductsListSecurity };
var VisionProjectsLocationsProductSetsProductsListRequest = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsProductsListRequest, _super);
    function VisionProjectsLocationsProductSetsProductsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductSetsProductsListPathParams)
    ], VisionProjectsLocationsProductSetsProductsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductSetsProductsListQueryParams)
    ], VisionProjectsLocationsProductSetsProductsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductSetsProductsListSecurity)
    ], VisionProjectsLocationsProductSetsProductsListRequest.prototype, "security", void 0);
    return VisionProjectsLocationsProductSetsProductsListRequest;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsProductsListRequest };
var VisionProjectsLocationsProductSetsProductsListResponse = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsProductsListResponse, _super);
    function VisionProjectsLocationsProductSetsProductsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsProductsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListProductsInProductSetResponse)
    ], VisionProjectsLocationsProductSetsProductsListResponse.prototype, "listProductsInProductSetResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VisionProjectsLocationsProductSetsProductsListResponse.prototype, "statusCode", void 0);
    return VisionProjectsLocationsProductSetsProductsListResponse;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsProductsListResponse };
