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
var RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesPathParams = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesPathParams, _super);
    function RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pretargetingConfig" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesPathParams.prototype, "pretargetingConfig", void 0);
    return RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesPathParams;
}(SpeakeasyBase));
export { RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesPathParams };
var RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesQueryParams = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesQueryParams, _super);
    function RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesQueryParams.prototype, "uploadProtocol", void 0);
    return RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesQueryParams;
}(SpeakeasyBase));
export { RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesQueryParams };
var RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesSecurity = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesSecurity, _super);
    function RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesSecurity.prototype, "oauth2c", void 0);
    return RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesSecurity;
}(SpeakeasyBase));
export { RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesSecurity };
var RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesRequest = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesRequest, _super);
    function RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesPathParams)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesQueryParams)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AddTargetedSitesRequest)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesSecurity)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesRequest.prototype, "security", void 0);
    return RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesRequest;
}(SpeakeasyBase));
export { RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesRequest };
var RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesResponse = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesResponse, _super);
    function RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PretargetingConfig)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesResponse.prototype, "pretargetingConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesResponse.prototype, "statusCode", void 0);
    return RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesResponse;
}(SpeakeasyBase));
export { RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesResponse };
