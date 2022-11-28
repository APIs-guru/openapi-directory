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
var RealtimebiddingBiddersPretargetingConfigsListPathParams = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPretargetingConfigsListPathParams, _super);
    function RealtimebiddingBiddersPretargetingConfigsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsListPathParams.prototype, "parent", void 0);
    return RealtimebiddingBiddersPretargetingConfigsListPathParams;
}(SpeakeasyBase));
export { RealtimebiddingBiddersPretargetingConfigsListPathParams };
var RealtimebiddingBiddersPretargetingConfigsListQueryParams = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPretargetingConfigsListQueryParams, _super);
    function RealtimebiddingBiddersPretargetingConfigsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], RealtimebiddingBiddersPretargetingConfigsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RealtimebiddingBiddersPretargetingConfigsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsListQueryParams.prototype, "uploadProtocol", void 0);
    return RealtimebiddingBiddersPretargetingConfigsListQueryParams;
}(SpeakeasyBase));
export { RealtimebiddingBiddersPretargetingConfigsListQueryParams };
var RealtimebiddingBiddersPretargetingConfigsListSecurity = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPretargetingConfigsListSecurity, _super);
    function RealtimebiddingBiddersPretargetingConfigsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RealtimebiddingBiddersPretargetingConfigsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RealtimebiddingBiddersPretargetingConfigsListSecurity.prototype, "oauth2c", void 0);
    return RealtimebiddingBiddersPretargetingConfigsListSecurity;
}(SpeakeasyBase));
export { RealtimebiddingBiddersPretargetingConfigsListSecurity };
var RealtimebiddingBiddersPretargetingConfigsListRequest = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPretargetingConfigsListRequest, _super);
    function RealtimebiddingBiddersPretargetingConfigsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBiddersPretargetingConfigsListPathParams)
    ], RealtimebiddingBiddersPretargetingConfigsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBiddersPretargetingConfigsListQueryParams)
    ], RealtimebiddingBiddersPretargetingConfigsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBiddersPretargetingConfigsListSecurity)
    ], RealtimebiddingBiddersPretargetingConfigsListRequest.prototype, "security", void 0);
    return RealtimebiddingBiddersPretargetingConfigsListRequest;
}(SpeakeasyBase));
export { RealtimebiddingBiddersPretargetingConfigsListRequest };
var RealtimebiddingBiddersPretargetingConfigsListResponse = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPretargetingConfigsListResponse, _super);
    function RealtimebiddingBiddersPretargetingConfigsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListPretargetingConfigsResponse)
    ], RealtimebiddingBiddersPretargetingConfigsListResponse.prototype, "listPretargetingConfigsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RealtimebiddingBiddersPretargetingConfigsListResponse.prototype, "statusCode", void 0);
    return RealtimebiddingBiddersPretargetingConfigsListResponse;
}(SpeakeasyBase));
export { RealtimebiddingBiddersPretargetingConfigsListResponse };
