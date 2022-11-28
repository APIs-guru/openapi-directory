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
var VisionProjectsLocationsProductSetsListPathParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsListPathParams, _super);
    function VisionProjectsLocationsProductSetsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsListPathParams.prototype, "parent", void 0);
    return VisionProjectsLocationsProductSetsListPathParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsListPathParams };
var VisionProjectsLocationsProductSetsListQueryParams = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsListQueryParams, _super);
    function VisionProjectsLocationsProductSetsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], VisionProjectsLocationsProductSetsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VisionProjectsLocationsProductSetsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsListQueryParams.prototype, "uploadProtocol", void 0);
    return VisionProjectsLocationsProductSetsListQueryParams;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsListQueryParams };
var VisionProjectsLocationsProductSetsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsListSecurityOption1, _super);
    function VisionProjectsLocationsProductSetsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsProductSetsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsProductSetsListSecurityOption1.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsProductSetsListSecurityOption1;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsListSecurityOption1 };
var VisionProjectsLocationsProductSetsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsListSecurityOption2, _super);
    function VisionProjectsLocationsProductSetsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VisionProjectsLocationsProductSetsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VisionProjectsLocationsProductSetsListSecurityOption2.prototype, "oauth2c", void 0);
    return VisionProjectsLocationsProductSetsListSecurityOption2;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsListSecurityOption2 };
var VisionProjectsLocationsProductSetsListSecurity = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsListSecurity, _super);
    function VisionProjectsLocationsProductSetsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsProductSetsListSecurityOption1)
    ], VisionProjectsLocationsProductSetsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", VisionProjectsLocationsProductSetsListSecurityOption2)
    ], VisionProjectsLocationsProductSetsListSecurity.prototype, "option2", void 0);
    return VisionProjectsLocationsProductSetsListSecurity;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsListSecurity };
var VisionProjectsLocationsProductSetsListRequest = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsListRequest, _super);
    function VisionProjectsLocationsProductSetsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductSetsListPathParams)
    ], VisionProjectsLocationsProductSetsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductSetsListQueryParams)
    ], VisionProjectsLocationsProductSetsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VisionProjectsLocationsProductSetsListSecurity)
    ], VisionProjectsLocationsProductSetsListRequest.prototype, "security", void 0);
    return VisionProjectsLocationsProductSetsListRequest;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsListRequest };
var VisionProjectsLocationsProductSetsListResponse = /** @class */ (function (_super) {
    __extends(VisionProjectsLocationsProductSetsListResponse, _super);
    function VisionProjectsLocationsProductSetsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VisionProjectsLocationsProductSetsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListProductSetsResponse)
    ], VisionProjectsLocationsProductSetsListResponse.prototype, "listProductSetsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VisionProjectsLocationsProductSetsListResponse.prototype, "statusCode", void 0);
    return VisionProjectsLocationsProductSetsListResponse;
}(SpeakeasyBase));
export { VisionProjectsLocationsProductSetsListResponse };
