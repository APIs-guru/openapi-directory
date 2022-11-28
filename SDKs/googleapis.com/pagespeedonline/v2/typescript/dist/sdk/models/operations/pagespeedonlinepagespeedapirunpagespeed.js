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
export var PagespeedonlinePagespeedapiRunpagespeedStrategyEnum;
(function (PagespeedonlinePagespeedapiRunpagespeedStrategyEnum) {
    PagespeedonlinePagespeedapiRunpagespeedStrategyEnum["Desktop"] = "desktop";
    PagespeedonlinePagespeedapiRunpagespeedStrategyEnum["Mobile"] = "mobile";
})(PagespeedonlinePagespeedapiRunpagespeedStrategyEnum || (PagespeedonlinePagespeedapiRunpagespeedStrategyEnum = {}));
var PagespeedonlinePagespeedapiRunpagespeedQueryParams = /** @class */ (function (_super) {
    __extends(PagespeedonlinePagespeedapiRunpagespeedQueryParams, _super);
    function PagespeedonlinePagespeedapiRunpagespeedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PagespeedonlinePagespeedapiRunpagespeedQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PagespeedonlinePagespeedapiRunpagespeedQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter_third_party_resources" }),
        __metadata("design:type", Boolean)
    ], PagespeedonlinePagespeedapiRunpagespeedQueryParams.prototype, "filterThirdPartyResources", void 0);
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
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rule" }),
        __metadata("design:type", Array)
    ], PagespeedonlinePagespeedapiRunpagespeedQueryParams.prototype, "rule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=screenshot" }),
        __metadata("design:type", Boolean)
    ], PagespeedonlinePagespeedapiRunpagespeedQueryParams.prototype, "screenshot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=strategy" }),
        __metadata("design:type", String)
    ], PagespeedonlinePagespeedapiRunpagespeedQueryParams.prototype, "strategy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" }),
        __metadata("design:type", String)
    ], PagespeedonlinePagespeedapiRunpagespeedQueryParams.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], PagespeedonlinePagespeedapiRunpagespeedQueryParams.prototype, "userIp", void 0);
    return PagespeedonlinePagespeedapiRunpagespeedQueryParams;
}(SpeakeasyBase));
export { PagespeedonlinePagespeedapiRunpagespeedQueryParams };
var PagespeedonlinePagespeedapiRunpagespeedRequest = /** @class */ (function (_super) {
    __extends(PagespeedonlinePagespeedapiRunpagespeedRequest, _super);
    function PagespeedonlinePagespeedapiRunpagespeedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PagespeedonlinePagespeedapiRunpagespeedQueryParams)
    ], PagespeedonlinePagespeedapiRunpagespeedRequest.prototype, "queryParams", void 0);
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
        __metadata("design:type", Uint8Array)
    ], PagespeedonlinePagespeedapiRunpagespeedResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PagespeedonlinePagespeedapiRunpagespeedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PagespeedonlinePagespeedapiRunpagespeedResponse.prototype, "statusCode", void 0);
    return PagespeedonlinePagespeedapiRunpagespeedResponse;
}(SpeakeasyBase));
export { PagespeedonlinePagespeedapiRunpagespeedResponse };
