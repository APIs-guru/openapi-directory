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
var RealtimebiddingBiddersBiddingFunctionsActivatePathParams = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersBiddingFunctionsActivatePathParams, _super);
    function RealtimebiddingBiddersBiddingFunctionsActivatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersBiddingFunctionsActivatePathParams.prototype, "name", void 0);
    return RealtimebiddingBiddersBiddingFunctionsActivatePathParams;
}(SpeakeasyBase));
export { RealtimebiddingBiddersBiddingFunctionsActivatePathParams };
var RealtimebiddingBiddersBiddingFunctionsActivateQueryParams = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersBiddingFunctionsActivateQueryParams, _super);
    function RealtimebiddingBiddersBiddingFunctionsActivateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersBiddingFunctionsActivateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersBiddingFunctionsActivateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersBiddingFunctionsActivateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersBiddingFunctionsActivateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersBiddingFunctionsActivateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersBiddingFunctionsActivateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersBiddingFunctionsActivateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RealtimebiddingBiddersBiddingFunctionsActivateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersBiddingFunctionsActivateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersBiddingFunctionsActivateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersBiddingFunctionsActivateQueryParams.prototype, "uploadProtocol", void 0);
    return RealtimebiddingBiddersBiddingFunctionsActivateQueryParams;
}(SpeakeasyBase));
export { RealtimebiddingBiddersBiddingFunctionsActivateQueryParams };
var RealtimebiddingBiddersBiddingFunctionsActivateSecurity = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersBiddingFunctionsActivateSecurity, _super);
    function RealtimebiddingBiddersBiddingFunctionsActivateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RealtimebiddingBiddersBiddingFunctionsActivateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RealtimebiddingBiddersBiddingFunctionsActivateSecurity.prototype, "oauth2c", void 0);
    return RealtimebiddingBiddersBiddingFunctionsActivateSecurity;
}(SpeakeasyBase));
export { RealtimebiddingBiddersBiddingFunctionsActivateSecurity };
var RealtimebiddingBiddersBiddingFunctionsActivateRequest = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersBiddingFunctionsActivateRequest, _super);
    function RealtimebiddingBiddersBiddingFunctionsActivateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBiddersBiddingFunctionsActivatePathParams)
    ], RealtimebiddingBiddersBiddingFunctionsActivateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBiddersBiddingFunctionsActivateQueryParams)
    ], RealtimebiddingBiddersBiddingFunctionsActivateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], RealtimebiddingBiddersBiddingFunctionsActivateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBiddersBiddingFunctionsActivateSecurity)
    ], RealtimebiddingBiddersBiddingFunctionsActivateRequest.prototype, "security", void 0);
    return RealtimebiddingBiddersBiddingFunctionsActivateRequest;
}(SpeakeasyBase));
export { RealtimebiddingBiddersBiddingFunctionsActivateRequest };
var RealtimebiddingBiddersBiddingFunctionsActivateResponse = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersBiddingFunctionsActivateResponse, _super);
    function RealtimebiddingBiddersBiddingFunctionsActivateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BiddingFunction)
    ], RealtimebiddingBiddersBiddingFunctionsActivateResponse.prototype, "biddingFunction", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersBiddingFunctionsActivateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RealtimebiddingBiddersBiddingFunctionsActivateResponse.prototype, "statusCode", void 0);
    return RealtimebiddingBiddersBiddingFunctionsActivateResponse;
}(SpeakeasyBase));
export { RealtimebiddingBiddersBiddingFunctionsActivateResponse };
