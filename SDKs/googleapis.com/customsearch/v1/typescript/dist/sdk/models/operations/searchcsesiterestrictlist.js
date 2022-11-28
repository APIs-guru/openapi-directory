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
export var SearchCseSiterestrictListImgColorTypeEnum;
(function (SearchCseSiterestrictListImgColorTypeEnum) {
    SearchCseSiterestrictListImgColorTypeEnum["ImgColorTypeUndefined"] = "imgColorTypeUndefined";
    SearchCseSiterestrictListImgColorTypeEnum["Mono"] = "mono";
    SearchCseSiterestrictListImgColorTypeEnum["Gray"] = "gray";
    SearchCseSiterestrictListImgColorTypeEnum["Color"] = "color";
    SearchCseSiterestrictListImgColorTypeEnum["Trans"] = "trans";
})(SearchCseSiterestrictListImgColorTypeEnum || (SearchCseSiterestrictListImgColorTypeEnum = {}));
export var SearchCseSiterestrictListImgDominantColorEnum;
(function (SearchCseSiterestrictListImgDominantColorEnum) {
    SearchCseSiterestrictListImgDominantColorEnum["ImgDominantColorUndefined"] = "imgDominantColorUndefined";
    SearchCseSiterestrictListImgDominantColorEnum["Black"] = "black";
    SearchCseSiterestrictListImgDominantColorEnum["Blue"] = "blue";
    SearchCseSiterestrictListImgDominantColorEnum["Brown"] = "brown";
    SearchCseSiterestrictListImgDominantColorEnum["Gray"] = "gray";
    SearchCseSiterestrictListImgDominantColorEnum["Green"] = "green";
    SearchCseSiterestrictListImgDominantColorEnum["Orange"] = "orange";
    SearchCseSiterestrictListImgDominantColorEnum["Pink"] = "pink";
    SearchCseSiterestrictListImgDominantColorEnum["Purple"] = "purple";
    SearchCseSiterestrictListImgDominantColorEnum["Red"] = "red";
    SearchCseSiterestrictListImgDominantColorEnum["Teal"] = "teal";
    SearchCseSiterestrictListImgDominantColorEnum["White"] = "white";
    SearchCseSiterestrictListImgDominantColorEnum["Yellow"] = "yellow";
})(SearchCseSiterestrictListImgDominantColorEnum || (SearchCseSiterestrictListImgDominantColorEnum = {}));
export var SearchCseSiterestrictListImgSizeEnum;
(function (SearchCseSiterestrictListImgSizeEnum) {
    SearchCseSiterestrictListImgSizeEnum["ImgSizeUndefined"] = "imgSizeUndefined";
    SearchCseSiterestrictListImgSizeEnum["Huge"] = "HUGE";
    SearchCseSiterestrictListImgSizeEnum["Icon"] = "ICON";
    SearchCseSiterestrictListImgSizeEnum["Large"] = "LARGE";
    SearchCseSiterestrictListImgSizeEnum["Medium"] = "MEDIUM";
    SearchCseSiterestrictListImgSizeEnum["Small"] = "SMALL";
    SearchCseSiterestrictListImgSizeEnum["Xlarge"] = "XLARGE";
    SearchCseSiterestrictListImgSizeEnum["Xxlarge"] = "XXLARGE";
})(SearchCseSiterestrictListImgSizeEnum || (SearchCseSiterestrictListImgSizeEnum = {}));
export var SearchCseSiterestrictListImgTypeEnum;
(function (SearchCseSiterestrictListImgTypeEnum) {
    SearchCseSiterestrictListImgTypeEnum["ImgTypeUndefined"] = "imgTypeUndefined";
    SearchCseSiterestrictListImgTypeEnum["Clipart"] = "clipart";
    SearchCseSiterestrictListImgTypeEnum["Face"] = "face";
    SearchCseSiterestrictListImgTypeEnum["Lineart"] = "lineart";
    SearchCseSiterestrictListImgTypeEnum["Stock"] = "stock";
    SearchCseSiterestrictListImgTypeEnum["Photo"] = "photo";
    SearchCseSiterestrictListImgTypeEnum["Animated"] = "animated";
})(SearchCseSiterestrictListImgTypeEnum || (SearchCseSiterestrictListImgTypeEnum = {}));
export var SearchCseSiterestrictListSafeEnum;
(function (SearchCseSiterestrictListSafeEnum) {
    SearchCseSiterestrictListSafeEnum["SafeUndefined"] = "safeUndefined";
    SearchCseSiterestrictListSafeEnum["Active"] = "active";
    SearchCseSiterestrictListSafeEnum["High"] = "high";
    SearchCseSiterestrictListSafeEnum["Medium"] = "medium";
    SearchCseSiterestrictListSafeEnum["Off"] = "off";
})(SearchCseSiterestrictListSafeEnum || (SearchCseSiterestrictListSafeEnum = {}));
export var SearchCseSiterestrictListSearchTypeEnum;
(function (SearchCseSiterestrictListSearchTypeEnum) {
    SearchCseSiterestrictListSearchTypeEnum["SearchTypeUndefined"] = "searchTypeUndefined";
    SearchCseSiterestrictListSearchTypeEnum["Image"] = "image";
})(SearchCseSiterestrictListSearchTypeEnum || (SearchCseSiterestrictListSearchTypeEnum = {}));
export var SearchCseSiterestrictListSiteSearchFilterEnum;
(function (SearchCseSiterestrictListSiteSearchFilterEnum) {
    SearchCseSiterestrictListSiteSearchFilterEnum["SiteSearchFilterUndefined"] = "siteSearchFilterUndefined";
    SearchCseSiterestrictListSiteSearchFilterEnum["E"] = "e";
    SearchCseSiterestrictListSiteSearchFilterEnum["I"] = "i";
})(SearchCseSiterestrictListSiteSearchFilterEnum || (SearchCseSiterestrictListSiteSearchFilterEnum = {}));
var SearchCseSiterestrictListQueryParams = /** @class */ (function (_super) {
    __extends(SearchCseSiterestrictListQueryParams, _super);
    function SearchCseSiterestrictListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=c2coff" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "c2coff", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cr" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "cr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cx" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "cx", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateRestrict" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "dateRestrict", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exactTerms" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "exactTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeTerms" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "excludeTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fileType" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "fileType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gl" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "gl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=googlehost" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "googlehost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=highRange" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "highRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hl" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "hl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hq" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "hq", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imgColorType" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "imgColorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imgDominantColor" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "imgDominantColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imgSize" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "imgSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imgType" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "imgType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=linkSite" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "linkSite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lowRange" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "lowRange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lr" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "lr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=num" }),
        __metadata("design:type", Number)
    ], SearchCseSiterestrictListQueryParams.prototype, "num", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orTerms" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "orTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SearchCseSiterestrictListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=relatedSite" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "relatedSite", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rights" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "rights", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=safe" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "safe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchType" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "searchType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=siteSearch" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "siteSearch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=siteSearchFilter" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "siteSearchFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], SearchCseSiterestrictListQueryParams.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListQueryParams.prototype, "uploadProtocol", void 0);
    return SearchCseSiterestrictListQueryParams;
}(SpeakeasyBase));
export { SearchCseSiterestrictListQueryParams };
var SearchCseSiterestrictListRequest = /** @class */ (function (_super) {
    __extends(SearchCseSiterestrictListRequest, _super);
    function SearchCseSiterestrictListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SearchCseSiterestrictListQueryParams)
    ], SearchCseSiterestrictListRequest.prototype, "queryParams", void 0);
    return SearchCseSiterestrictListRequest;
}(SpeakeasyBase));
export { SearchCseSiterestrictListRequest };
var SearchCseSiterestrictListResponse = /** @class */ (function (_super) {
    __extends(SearchCseSiterestrictListResponse, _super);
    function SearchCseSiterestrictListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SearchCseSiterestrictListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Search)
    ], SearchCseSiterestrictListResponse.prototype, "search", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SearchCseSiterestrictListResponse.prototype, "statusCode", void 0);
    return SearchCseSiterestrictListResponse;
}(SpeakeasyBase));
export { SearchCseSiterestrictListResponse };
