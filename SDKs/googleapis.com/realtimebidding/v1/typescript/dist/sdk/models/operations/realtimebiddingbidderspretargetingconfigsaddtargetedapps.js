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
var RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsPathParams = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsPathParams, _super);
    function RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pretargetingConfig" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsPathParams.prototype, "pretargetingConfig", void 0);
    return RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsPathParams;
}(SpeakeasyBase));
export { RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsPathParams };
var RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsQueryParams = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsQueryParams, _super);
    function RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsQueryParams.prototype, "uploadProtocol", void 0);
    return RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsQueryParams;
}(SpeakeasyBase));
export { RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsQueryParams };
var RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsSecurity = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsSecurity, _super);
    function RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsSecurity.prototype, "oauth2c", void 0);
    return RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsSecurity;
}(SpeakeasyBase));
export { RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsSecurity };
var RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsRequest = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsRequest, _super);
    function RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsPathParams)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsQueryParams)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AddTargetedAppsRequest)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsSecurity)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsRequest.prototype, "security", void 0);
    return RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsRequest;
}(SpeakeasyBase));
export { RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsRequest };
var RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsResponse = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsResponse, _super);
    function RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PretargetingConfig)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsResponse.prototype, "pretargetingConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsResponse.prototype, "statusCode", void 0);
    return RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsResponse;
}(SpeakeasyBase));
export { RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsResponse };
