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
export var BooksOnboardingListCategoryVolumesMaxAllowedMaturityRatingEnum;
(function (BooksOnboardingListCategoryVolumesMaxAllowedMaturityRatingEnum) {
    BooksOnboardingListCategoryVolumesMaxAllowedMaturityRatingEnum["MaxAllowedMaturityRatingUndefined"] = "MAX_ALLOWED_MATURITY_RATING_UNDEFINED";
    BooksOnboardingListCategoryVolumesMaxAllowedMaturityRatingEnum["Mature"] = "MATURE";
    BooksOnboardingListCategoryVolumesMaxAllowedMaturityRatingEnum["NotMature"] = "not-mature";
})(BooksOnboardingListCategoryVolumesMaxAllowedMaturityRatingEnum || (BooksOnboardingListCategoryVolumesMaxAllowedMaturityRatingEnum = {}));
var BooksOnboardingListCategoryVolumesQueryParams = /** @class */ (function (_super) {
    __extends(BooksOnboardingListCategoryVolumesQueryParams, _super);
    function BooksOnboardingListCategoryVolumesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BooksOnboardingListCategoryVolumesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BooksOnboardingListCategoryVolumesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BooksOnboardingListCategoryVolumesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BooksOnboardingListCategoryVolumesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=categoryId" }),
        __metadata("design:type", Array)
    ], BooksOnboardingListCategoryVolumesQueryParams.prototype, "categoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BooksOnboardingListCategoryVolumesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BooksOnboardingListCategoryVolumesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], BooksOnboardingListCategoryVolumesQueryParams.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxAllowedMaturityRating" }),
        __metadata("design:type", String)
    ], BooksOnboardingListCategoryVolumesQueryParams.prototype, "maxAllowedMaturityRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BooksOnboardingListCategoryVolumesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BooksOnboardingListCategoryVolumesQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BooksOnboardingListCategoryVolumesQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BooksOnboardingListCategoryVolumesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BooksOnboardingListCategoryVolumesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BooksOnboardingListCategoryVolumesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BooksOnboardingListCategoryVolumesQueryParams.prototype, "uploadProtocol", void 0);
    return BooksOnboardingListCategoryVolumesQueryParams;
}(SpeakeasyBase));
export { BooksOnboardingListCategoryVolumesQueryParams };
var BooksOnboardingListCategoryVolumesSecurity = /** @class */ (function (_super) {
    __extends(BooksOnboardingListCategoryVolumesSecurity, _super);
    function BooksOnboardingListCategoryVolumesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BooksOnboardingListCategoryVolumesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BooksOnboardingListCategoryVolumesSecurity.prototype, "oauth2c", void 0);
    return BooksOnboardingListCategoryVolumesSecurity;
}(SpeakeasyBase));
export { BooksOnboardingListCategoryVolumesSecurity };
var BooksOnboardingListCategoryVolumesRequest = /** @class */ (function (_super) {
    __extends(BooksOnboardingListCategoryVolumesRequest, _super);
    function BooksOnboardingListCategoryVolumesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksOnboardingListCategoryVolumesQueryParams)
    ], BooksOnboardingListCategoryVolumesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksOnboardingListCategoryVolumesSecurity)
    ], BooksOnboardingListCategoryVolumesRequest.prototype, "security", void 0);
    return BooksOnboardingListCategoryVolumesRequest;
}(SpeakeasyBase));
export { BooksOnboardingListCategoryVolumesRequest };
var BooksOnboardingListCategoryVolumesResponse = /** @class */ (function (_super) {
    __extends(BooksOnboardingListCategoryVolumesResponse, _super);
    function BooksOnboardingListCategoryVolumesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BooksOnboardingListCategoryVolumesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BooksOnboardingListCategoryVolumesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Volume2)
    ], BooksOnboardingListCategoryVolumesResponse.prototype, "volume2", void 0);
    return BooksOnboardingListCategoryVolumesResponse;
}(SpeakeasyBase));
export { BooksOnboardingListCategoryVolumesResponse };
