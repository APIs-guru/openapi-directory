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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var RealtimebiddingBiddersBiddingFunctionsCreatePathParams = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersBiddingFunctionsCreatePathParams, _super);
    function RealtimebiddingBiddersBiddingFunctionsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersBiddingFunctionsCreatePathParams.prototype, "parent", void 0);
    return RealtimebiddingBiddersBiddingFunctionsCreatePathParams;
}(SpeakeasyBase));
export { RealtimebiddingBiddersBiddingFunctionsCreatePathParams };
var RealtimebiddingBiddersBiddingFunctionsCreateQueryParams = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersBiddingFunctionsCreateQueryParams, _super);
    function RealtimebiddingBiddersBiddingFunctionsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersBiddingFunctionsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersBiddingFunctionsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersBiddingFunctionsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersBiddingFunctionsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersBiddingFunctionsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersBiddingFunctionsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersBiddingFunctionsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RealtimebiddingBiddersBiddingFunctionsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersBiddingFunctionsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersBiddingFunctionsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersBiddingFunctionsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return RealtimebiddingBiddersBiddingFunctionsCreateQueryParams;
}(SpeakeasyBase));
export { RealtimebiddingBiddersBiddingFunctionsCreateQueryParams };
var RealtimebiddingBiddersBiddingFunctionsCreateSecurity = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersBiddingFunctionsCreateSecurity, _super);
    function RealtimebiddingBiddersBiddingFunctionsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RealtimebiddingBiddersBiddingFunctionsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RealtimebiddingBiddersBiddingFunctionsCreateSecurity.prototype, "oauth2c", void 0);
    return RealtimebiddingBiddersBiddingFunctionsCreateSecurity;
}(SpeakeasyBase));
export { RealtimebiddingBiddersBiddingFunctionsCreateSecurity };
var RealtimebiddingBiddersBiddingFunctionsCreateRequest = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersBiddingFunctionsCreateRequest, _super);
    function RealtimebiddingBiddersBiddingFunctionsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", RealtimebiddingBiddersBiddingFunctionsCreatePathParams)
    ], RealtimebiddingBiddersBiddingFunctionsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", RealtimebiddingBiddersBiddingFunctionsCreateQueryParams)
    ], RealtimebiddingBiddersBiddingFunctionsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BiddingFunction)
    ], RealtimebiddingBiddersBiddingFunctionsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", RealtimebiddingBiddersBiddingFunctionsCreateSecurity)
    ], RealtimebiddingBiddersBiddingFunctionsCreateRequest.prototype, "security", void 0);
    return RealtimebiddingBiddersBiddingFunctionsCreateRequest;
}(SpeakeasyBase));
export { RealtimebiddingBiddersBiddingFunctionsCreateRequest };
var RealtimebiddingBiddersBiddingFunctionsCreateResponse = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersBiddingFunctionsCreateResponse, _super);
    function RealtimebiddingBiddersBiddingFunctionsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BiddingFunction)
    ], RealtimebiddingBiddersBiddingFunctionsCreateResponse.prototype, "biddingFunction", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersBiddingFunctionsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RealtimebiddingBiddersBiddingFunctionsCreateResponse.prototype, "statusCode", void 0);
    return RealtimebiddingBiddersBiddingFunctionsCreateResponse;
}(SpeakeasyBase));
export { RealtimebiddingBiddersBiddingFunctionsCreateResponse };
