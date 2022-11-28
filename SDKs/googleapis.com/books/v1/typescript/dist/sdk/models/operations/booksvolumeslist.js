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
export var BooksVolumesListDownloadEnum;
(function (BooksVolumesListDownloadEnum) {
    BooksVolumesListDownloadEnum["DownloadUndefined"] = "DOWNLOAD_UNDEFINED";
    BooksVolumesListDownloadEnum["Epub"] = "EPUB";
})(BooksVolumesListDownloadEnum || (BooksVolumesListDownloadEnum = {}));
export var BooksVolumesListFilterEnum;
(function (BooksVolumesListFilterEnum) {
    BooksVolumesListFilterEnum["FilterUndefined"] = "FILTER_UNDEFINED";
    BooksVolumesListFilterEnum["Ebooks"] = "ebooks";
    BooksVolumesListFilterEnum["FreeEbooks"] = "free-ebooks";
    BooksVolumesListFilterEnum["Full"] = "full";
    BooksVolumesListFilterEnum["PaidEbooks"] = "paid-ebooks";
    BooksVolumesListFilterEnum["Partial"] = "partial";
})(BooksVolumesListFilterEnum || (BooksVolumesListFilterEnum = {}));
export var BooksVolumesListLibraryRestrictEnum;
(function (BooksVolumesListLibraryRestrictEnum) {
    BooksVolumesListLibraryRestrictEnum["LibraryRestrictUndefined"] = "LIBRARY_RESTRICT_UNDEFINED";
    BooksVolumesListLibraryRestrictEnum["MyLibrary"] = "my-library";
    BooksVolumesListLibraryRestrictEnum["NoRestrict"] = "no-restrict";
})(BooksVolumesListLibraryRestrictEnum || (BooksVolumesListLibraryRestrictEnum = {}));
export var BooksVolumesListMaxAllowedMaturityRatingEnum;
(function (BooksVolumesListMaxAllowedMaturityRatingEnum) {
    BooksVolumesListMaxAllowedMaturityRatingEnum["MaxAllowedMaturityRatingUndefined"] = "MAX_ALLOWED_MATURITY_RATING_UNDEFINED";
    BooksVolumesListMaxAllowedMaturityRatingEnum["Mature"] = "MATURE";
    BooksVolumesListMaxAllowedMaturityRatingEnum["NotMature"] = "not-mature";
})(BooksVolumesListMaxAllowedMaturityRatingEnum || (BooksVolumesListMaxAllowedMaturityRatingEnum = {}));
export var BooksVolumesListOrderByEnum;
(function (BooksVolumesListOrderByEnum) {
    BooksVolumesListOrderByEnum["OrderByUndefined"] = "ORDER_BY_UNDEFINED";
    BooksVolumesListOrderByEnum["Newest"] = "newest";
    BooksVolumesListOrderByEnum["Relevance"] = "relevance";
})(BooksVolumesListOrderByEnum || (BooksVolumesListOrderByEnum = {}));
export var BooksVolumesListPrintTypeEnum;
(function (BooksVolumesListPrintTypeEnum) {
    BooksVolumesListPrintTypeEnum["PrintTypeUndefined"] = "PRINT_TYPE_UNDEFINED";
    BooksVolumesListPrintTypeEnum["All"] = "ALL";
    BooksVolumesListPrintTypeEnum["Books"] = "BOOKS";
    BooksVolumesListPrintTypeEnum["Magazines"] = "MAGAZINES";
})(BooksVolumesListPrintTypeEnum || (BooksVolumesListPrintTypeEnum = {}));
export var BooksVolumesListProjectionEnum;
(function (BooksVolumesListProjectionEnum) {
    BooksVolumesListProjectionEnum["ProjectionUndefined"] = "PROJECTION_UNDEFINED";
    BooksVolumesListProjectionEnum["Full"] = "FULL";
    BooksVolumesListProjectionEnum["Lite"] = "LITE";
})(BooksVolumesListProjectionEnum || (BooksVolumesListProjectionEnum = {}));
var BooksVolumesListQueryParams = /** @class */ (function (_super) {
    __extends(BooksVolumesListQueryParams, _super);
    function BooksVolumesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BooksVolumesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BooksVolumesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BooksVolumesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BooksVolumesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=download" }),
        __metadata("design:type", String)
    ], BooksVolumesListQueryParams.prototype, "download", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BooksVolumesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], BooksVolumesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BooksVolumesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=langRestrict" }),
        __metadata("design:type", String)
    ], BooksVolumesListQueryParams.prototype, "langRestrict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=libraryRestrict" }),
        __metadata("design:type", String)
    ], BooksVolumesListQueryParams.prototype, "libraryRestrict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxAllowedMaturityRating" }),
        __metadata("design:type", String)
    ], BooksVolumesListQueryParams.prototype, "maxAllowedMaturityRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], BooksVolumesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BooksVolumesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], BooksVolumesListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner" }),
        __metadata("design:type", String)
    ], BooksVolumesListQueryParams.prototype, "partner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BooksVolumesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=printType" }),
        __metadata("design:type", String)
    ], BooksVolumesListQueryParams.prototype, "printType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projection" }),
        __metadata("design:type", String)
    ], BooksVolumesListQueryParams.prototype, "projection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], BooksVolumesListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BooksVolumesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showPreorders" }),
        __metadata("design:type", Boolean)
    ], BooksVolumesListQueryParams.prototype, "showPreorders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source" }),
        __metadata("design:type", String)
    ], BooksVolumesListQueryParams.prototype, "source", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startIndex" }),
        __metadata("design:type", Number)
    ], BooksVolumesListQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BooksVolumesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BooksVolumesListQueryParams.prototype, "uploadProtocol", void 0);
    return BooksVolumesListQueryParams;
}(SpeakeasyBase));
export { BooksVolumesListQueryParams };
var BooksVolumesListSecurity = /** @class */ (function (_super) {
    __extends(BooksVolumesListSecurity, _super);
    function BooksVolumesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BooksVolumesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BooksVolumesListSecurity.prototype, "oauth2c", void 0);
    return BooksVolumesListSecurity;
}(SpeakeasyBase));
export { BooksVolumesListSecurity };
var BooksVolumesListRequest = /** @class */ (function (_super) {
    __extends(BooksVolumesListRequest, _super);
    function BooksVolumesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksVolumesListQueryParams)
    ], BooksVolumesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BooksVolumesListSecurity)
    ], BooksVolumesListRequest.prototype, "security", void 0);
    return BooksVolumesListRequest;
}(SpeakeasyBase));
export { BooksVolumesListRequest };
var BooksVolumesListResponse = /** @class */ (function (_super) {
    __extends(BooksVolumesListResponse, _super);
    function BooksVolumesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BooksVolumesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BooksVolumesListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Volumes)
    ], BooksVolumesListResponse.prototype, "volumes", void 0);
    return BooksVolumesListResponse;
}(SpeakeasyBase));
export { BooksVolumesListResponse };
