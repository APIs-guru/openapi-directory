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
var RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersPathParams = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersPathParams, _super);
    function RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pretargetingConfig" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersPathParams.prototype, "pretargetingConfig", void 0);
    return RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersPathParams;
}(SpeakeasyBase));
export { RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersPathParams };
var RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersQueryParams = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersQueryParams, _super);
    function RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersQueryParams.prototype, "uploadProtocol", void 0);
    return RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersQueryParams;
}(SpeakeasyBase));
export { RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersQueryParams };
var RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersSecurity = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersSecurity, _super);
    function RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersSecurity.prototype, "oauth2c", void 0);
    return RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersSecurity;
}(SpeakeasyBase));
export { RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersSecurity };
var RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersRequest = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersRequest, _super);
    function RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersPathParams)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersQueryParams)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AddTargetedPublishersRequest)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersSecurity)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersRequest.prototype, "security", void 0);
    return RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersRequest;
}(SpeakeasyBase));
export { RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersRequest };
var RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersResponse = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersResponse, _super);
    function RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PretargetingConfig)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersResponse.prototype, "pretargetingConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersResponse.prototype, "statusCode", void 0);
    return RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersResponse;
}(SpeakeasyBase));
export { RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersResponse };
