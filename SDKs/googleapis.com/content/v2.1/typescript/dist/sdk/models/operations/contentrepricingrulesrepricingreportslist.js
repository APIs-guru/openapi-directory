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
var ContentRepricingrulesRepricingreportsListPathParams = /** @class */ (function (_super) {
    __extends(ContentRepricingrulesRepricingreportsListPathParams, _super);
    function ContentRepricingrulesRepricingreportsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentRepricingrulesRepricingreportsListPathParams.prototype, "merchantId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ruleId" }),
        __metadata("design:type", String)
    ], ContentRepricingrulesRepricingreportsListPathParams.prototype, "ruleId", void 0);
    return ContentRepricingrulesRepricingreportsListPathParams;
}(SpeakeasyBase));
export { ContentRepricingrulesRepricingreportsListPathParams };
var ContentRepricingrulesRepricingreportsListQueryParams = /** @class */ (function (_super) {
    __extends(ContentRepricingrulesRepricingreportsListQueryParams, _super);
    function ContentRepricingrulesRepricingreportsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentRepricingrulesRepricingreportsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentRepricingrulesRepricingreportsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentRepricingrulesRepricingreportsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentRepricingrulesRepricingreportsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" }),
        __metadata("design:type", String)
    ], ContentRepricingrulesRepricingreportsListQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentRepricingrulesRepricingreportsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentRepricingrulesRepricingreportsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentRepricingrulesRepricingreportsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ContentRepricingrulesRepricingreportsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ContentRepricingrulesRepricingreportsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentRepricingrulesRepricingreportsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentRepricingrulesRepricingreportsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" }),
        __metadata("design:type", String)
    ], ContentRepricingrulesRepricingreportsListQueryParams.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentRepricingrulesRepricingreportsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentRepricingrulesRepricingreportsListQueryParams.prototype, "uploadProtocol", void 0);
    return ContentRepricingrulesRepricingreportsListQueryParams;
}(SpeakeasyBase));
export { ContentRepricingrulesRepricingreportsListQueryParams };
var ContentRepricingrulesRepricingreportsListSecurity = /** @class */ (function (_super) {
    __extends(ContentRepricingrulesRepricingreportsListSecurity, _super);
    function ContentRepricingrulesRepricingreportsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentRepricingrulesRepricingreportsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentRepricingrulesRepricingreportsListSecurity.prototype, "oauth2c", void 0);
    return ContentRepricingrulesRepricingreportsListSecurity;
}(SpeakeasyBase));
export { ContentRepricingrulesRepricingreportsListSecurity };
var ContentRepricingrulesRepricingreportsListRequest = /** @class */ (function (_super) {
    __extends(ContentRepricingrulesRepricingreportsListRequest, _super);
    function ContentRepricingrulesRepricingreportsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentRepricingrulesRepricingreportsListPathParams)
    ], ContentRepricingrulesRepricingreportsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentRepricingrulesRepricingreportsListQueryParams)
    ], ContentRepricingrulesRepricingreportsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentRepricingrulesRepricingreportsListSecurity)
    ], ContentRepricingrulesRepricingreportsListRequest.prototype, "security", void 0);
    return ContentRepricingrulesRepricingreportsListRequest;
}(SpeakeasyBase));
export { ContentRepricingrulesRepricingreportsListRequest };
var ContentRepricingrulesRepricingreportsListResponse = /** @class */ (function (_super) {
    __extends(ContentRepricingrulesRepricingreportsListResponse, _super);
    function ContentRepricingrulesRepricingreportsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentRepricingrulesRepricingreportsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListRepricingRuleReportsResponse)
    ], ContentRepricingrulesRepricingreportsListResponse.prototype, "listRepricingRuleReportsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentRepricingrulesRepricingreportsListResponse.prototype, "statusCode", void 0);
    return ContentRepricingrulesRepricingreportsListResponse;
}(SpeakeasyBase));
export { ContentRepricingrulesRepricingreportsListResponse };
