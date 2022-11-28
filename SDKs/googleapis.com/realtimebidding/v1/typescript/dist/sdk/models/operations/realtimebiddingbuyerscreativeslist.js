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
var RealtimebiddingBuyersCreativesListPathParams = /** @class */ (function (_super) {
    __extends(RealtimebiddingBuyersCreativesListPathParams, _super);
    function RealtimebiddingBuyersCreativesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersCreativesListPathParams.prototype, "parent", void 0);
    return RealtimebiddingBuyersCreativesListPathParams;
}(SpeakeasyBase));
export { RealtimebiddingBuyersCreativesListPathParams };
export var RealtimebiddingBuyersCreativesListViewEnum;
(function (RealtimebiddingBuyersCreativesListViewEnum) {
    RealtimebiddingBuyersCreativesListViewEnum["CreativeViewUnspecified"] = "CREATIVE_VIEW_UNSPECIFIED";
    RealtimebiddingBuyersCreativesListViewEnum["ServingDecisionOnly"] = "SERVING_DECISION_ONLY";
    RealtimebiddingBuyersCreativesListViewEnum["Full"] = "FULL";
})(RealtimebiddingBuyersCreativesListViewEnum || (RealtimebiddingBuyersCreativesListViewEnum = {}));
var RealtimebiddingBuyersCreativesListQueryParams = /** @class */ (function (_super) {
    __extends(RealtimebiddingBuyersCreativesListQueryParams, _super);
    function RealtimebiddingBuyersCreativesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersCreativesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersCreativesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersCreativesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersCreativesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersCreativesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersCreativesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersCreativesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersCreativesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], RealtimebiddingBuyersCreativesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersCreativesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RealtimebiddingBuyersCreativesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersCreativesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersCreativesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersCreativesListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersCreativesListQueryParams.prototype, "view", void 0);
    return RealtimebiddingBuyersCreativesListQueryParams;
}(SpeakeasyBase));
export { RealtimebiddingBuyersCreativesListQueryParams };
var RealtimebiddingBuyersCreativesListSecurity = /** @class */ (function (_super) {
    __extends(RealtimebiddingBuyersCreativesListSecurity, _super);
    function RealtimebiddingBuyersCreativesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RealtimebiddingBuyersCreativesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RealtimebiddingBuyersCreativesListSecurity.prototype, "oauth2c", void 0);
    return RealtimebiddingBuyersCreativesListSecurity;
}(SpeakeasyBase));
export { RealtimebiddingBuyersCreativesListSecurity };
var RealtimebiddingBuyersCreativesListRequest = /** @class */ (function (_super) {
    __extends(RealtimebiddingBuyersCreativesListRequest, _super);
    function RealtimebiddingBuyersCreativesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBuyersCreativesListPathParams)
    ], RealtimebiddingBuyersCreativesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBuyersCreativesListQueryParams)
    ], RealtimebiddingBuyersCreativesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBuyersCreativesListSecurity)
    ], RealtimebiddingBuyersCreativesListRequest.prototype, "security", void 0);
    return RealtimebiddingBuyersCreativesListRequest;
}(SpeakeasyBase));
export { RealtimebiddingBuyersCreativesListRequest };
var RealtimebiddingBuyersCreativesListResponse = /** @class */ (function (_super) {
    __extends(RealtimebiddingBuyersCreativesListResponse, _super);
    function RealtimebiddingBuyersCreativesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RealtimebiddingBuyersCreativesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListCreativesResponse)
    ], RealtimebiddingBuyersCreativesListResponse.prototype, "listCreativesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RealtimebiddingBuyersCreativesListResponse.prototype, "statusCode", void 0);
    return RealtimebiddingBuyersCreativesListResponse;
}(SpeakeasyBase));
export { RealtimebiddingBuyersCreativesListResponse };
