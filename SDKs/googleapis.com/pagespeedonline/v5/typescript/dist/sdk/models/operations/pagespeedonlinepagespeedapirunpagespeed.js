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
export var PagespeedonlinePagespeedapiRunpagespeedCategoryEnum;
(function (PagespeedonlinePagespeedapiRunpagespeedCategoryEnum) {
    PagespeedonlinePagespeedapiRunpagespeedCategoryEnum["CategoryUnspecified"] = "CATEGORY_UNSPECIFIED";
    PagespeedonlinePagespeedapiRunpagespeedCategoryEnum["Accessibility"] = "ACCESSIBILITY";
    PagespeedonlinePagespeedapiRunpagespeedCategoryEnum["BestPractices"] = "BEST_PRACTICES";
    PagespeedonlinePagespeedapiRunpagespeedCategoryEnum["Performance"] = "PERFORMANCE";
    PagespeedonlinePagespeedapiRunpagespeedCategoryEnum["Pwa"] = "PWA";
    PagespeedonlinePagespeedapiRunpagespeedCategoryEnum["Seo"] = "SEO";
})(PagespeedonlinePagespeedapiRunpagespeedCategoryEnum || (PagespeedonlinePagespeedapiRunpagespeedCategoryEnum = {}));
export var PagespeedonlinePagespeedapiRunpagespeedStrategyEnum;
(function (PagespeedonlinePagespeedapiRunpagespeedStrategyEnum) {
    PagespeedonlinePagespeedapiRunpagespeedStrategyEnum["StrategyUnspecified"] = "STRATEGY_UNSPECIFIED";
    PagespeedonlinePagespeedapiRunpagespeedStrategyEnum["Desktop"] = "DESKTOP";
    PagespeedonlinePagespeedapiRunpagespeedStrategyEnum["Mobile"] = "MOBILE";
})(PagespeedonlinePagespeedapiRunpagespeedStrategyEnum || (PagespeedonlinePagespeedapiRunpagespeedStrategyEnum = {}));
var PagespeedonlinePagespeedapiRunpagespeedQueryParams = /** @class */ (function (_super) {
    __extends(PagespeedonlinePagespeedapiRunpagespeedQueryParams, _super);
    function PagespeedonlinePagespeedapiRunpagespeedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PagespeedonlinePagespeedapiRunpagespeedQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PagespeedonlinePagespeedapiRunpagespeedQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PagespeedonlinePagespeedapiRunpagespeedQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PagespeedonlinePagespeedapiRunpagespeedQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=captchaToken" }),
        __metadata("design:type", String)
    ], PagespeedonlinePagespeedapiRunpagespeedQueryParams.prototype, "captchaToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" }),
        __metadata("design:type", Array)
    ], PagespeedonlinePagespeedapiRunpagespeedQueryParams.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PagespeedonlinePagespeedapiRunpagespeedQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PagespeedonlinePagespeedapiRunpagespeedQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], PagespeedonlinePagespeedapiRunpagespeedQueryParams.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PagespeedonlinePagespeedapiRunpagespeedQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PagespeedonlinePagespeedapiRunpagespeedQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PagespeedonlinePagespeedapiRunpagespeedQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=strategy" }),
        __metadata("design:type", String)
    ], PagespeedonlinePagespeedapiRunpagespeedQueryParams.prototype, "strategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PagespeedonlinePagespeedapiRunpagespeedQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PagespeedonlinePagespeedapiRunpagespeedQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" }),
        __metadata("design:type", String)
    ], PagespeedonlinePagespeedapiRunpagespeedQueryParams.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=utm_campaign" }),
        __metadata("design:type", String)
    ], PagespeedonlinePagespeedapiRunpagespeedQueryParams.prototype, "utmCampaign", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=utm_source" }),
        __metadata("design:type", String)
    ], PagespeedonlinePagespeedapiRunpagespeedQueryParams.prototype, "utmSource", void 0);
    return PagespeedonlinePagespeedapiRunpagespeedQueryParams;
}(SpeakeasyBase));
export { PagespeedonlinePagespeedapiRunpagespeedQueryParams };
var PagespeedonlinePagespeedapiRunpagespeedSecurity = /** @class */ (function (_super) {
    __extends(PagespeedonlinePagespeedapiRunpagespeedSecurity, _super);
    function PagespeedonlinePagespeedapiRunpagespeedSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PagespeedonlinePagespeedapiRunpagespeedSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PagespeedonlinePagespeedapiRunpagespeedSecurity.prototype, "oauth2c", void 0);
    return PagespeedonlinePagespeedapiRunpagespeedSecurity;
}(SpeakeasyBase));
export { PagespeedonlinePagespeedapiRunpagespeedSecurity };
var PagespeedonlinePagespeedapiRunpagespeedRequest = /** @class */ (function (_super) {
    __extends(PagespeedonlinePagespeedapiRunpagespeedRequest, _super);
    function PagespeedonlinePagespeedapiRunpagespeedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PagespeedonlinePagespeedapiRunpagespeedQueryParams)
    ], PagespeedonlinePagespeedapiRunpagespeedRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PagespeedonlinePagespeedapiRunpagespeedSecurity)
    ], PagespeedonlinePagespeedapiRunpagespeedRequest.prototype, "security", void 0);
    return PagespeedonlinePagespeedapiRunpagespeedRequest;
}(SpeakeasyBase));
export { PagespeedonlinePagespeedapiRunpagespeedRequest };
var PagespeedonlinePagespeedapiRunpagespeedResponse = /** @class */ (function (_super) {
    __extends(PagespeedonlinePagespeedapiRunpagespeedResponse, _super);
    function PagespeedonlinePagespeedapiRunpagespeedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedonlinePagespeedapiRunpagespeedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PagespeedApiPagespeedResponseV5)
    ], PagespeedonlinePagespeedapiRunpagespeedResponse.prototype, "pagespeedApiPagespeedResponseV5", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedonlinePagespeedapiRunpagespeedResponse.prototype, "statusCode", void 0);
    return PagespeedonlinePagespeedapiRunpagespeedResponse;
}(SpeakeasyBase));
export { PagespeedonlinePagespeedapiRunpagespeedResponse };
