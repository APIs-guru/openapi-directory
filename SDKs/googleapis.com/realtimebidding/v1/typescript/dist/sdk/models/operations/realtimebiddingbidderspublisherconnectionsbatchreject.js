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
var RealtimebiddingBiddersPublisherConnectionsBatchRejectPathParams = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPublisherConnectionsBatchRejectPathParams, _super);
    function RealtimebiddingBiddersPublisherConnectionsBatchRejectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPublisherConnectionsBatchRejectPathParams.prototype, "parent", void 0);
    return RealtimebiddingBiddersPublisherConnectionsBatchRejectPathParams;
}(SpeakeasyBase));
export { RealtimebiddingBiddersPublisherConnectionsBatchRejectPathParams };
var RealtimebiddingBiddersPublisherConnectionsBatchRejectQueryParams = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPublisherConnectionsBatchRejectQueryParams, _super);
    function RealtimebiddingBiddersPublisherConnectionsBatchRejectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPublisherConnectionsBatchRejectQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPublisherConnectionsBatchRejectQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPublisherConnectionsBatchRejectQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPublisherConnectionsBatchRejectQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPublisherConnectionsBatchRejectQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPublisherConnectionsBatchRejectQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPublisherConnectionsBatchRejectQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RealtimebiddingBiddersPublisherConnectionsBatchRejectQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPublisherConnectionsBatchRejectQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPublisherConnectionsBatchRejectQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPublisherConnectionsBatchRejectQueryParams.prototype, "uploadProtocol", void 0);
    return RealtimebiddingBiddersPublisherConnectionsBatchRejectQueryParams;
}(SpeakeasyBase));
export { RealtimebiddingBiddersPublisherConnectionsBatchRejectQueryParams };
var RealtimebiddingBiddersPublisherConnectionsBatchRejectSecurity = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPublisherConnectionsBatchRejectSecurity, _super);
    function RealtimebiddingBiddersPublisherConnectionsBatchRejectSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RealtimebiddingBiddersPublisherConnectionsBatchRejectSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RealtimebiddingBiddersPublisherConnectionsBatchRejectSecurity.prototype, "oauth2c", void 0);
    return RealtimebiddingBiddersPublisherConnectionsBatchRejectSecurity;
}(SpeakeasyBase));
export { RealtimebiddingBiddersPublisherConnectionsBatchRejectSecurity };
var RealtimebiddingBiddersPublisherConnectionsBatchRejectRequest = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPublisherConnectionsBatchRejectRequest, _super);
    function RealtimebiddingBiddersPublisherConnectionsBatchRejectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBiddersPublisherConnectionsBatchRejectPathParams)
    ], RealtimebiddingBiddersPublisherConnectionsBatchRejectRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBiddersPublisherConnectionsBatchRejectQueryParams)
    ], RealtimebiddingBiddersPublisherConnectionsBatchRejectRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchRejectPublisherConnectionsRequest)
    ], RealtimebiddingBiddersPublisherConnectionsBatchRejectRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RealtimebiddingBiddersPublisherConnectionsBatchRejectSecurity)
    ], RealtimebiddingBiddersPublisherConnectionsBatchRejectRequest.prototype, "security", void 0);
    return RealtimebiddingBiddersPublisherConnectionsBatchRejectRequest;
}(SpeakeasyBase));
export { RealtimebiddingBiddersPublisherConnectionsBatchRejectRequest };
var RealtimebiddingBiddersPublisherConnectionsBatchRejectResponse = /** @class */ (function (_super) {
    __extends(RealtimebiddingBiddersPublisherConnectionsBatchRejectResponse, _super);
    function RealtimebiddingBiddersPublisherConnectionsBatchRejectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchRejectPublisherConnectionsResponse)
    ], RealtimebiddingBiddersPublisherConnectionsBatchRejectResponse.prototype, "batchRejectPublisherConnectionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RealtimebiddingBiddersPublisherConnectionsBatchRejectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RealtimebiddingBiddersPublisherConnectionsBatchRejectResponse.prototype, "statusCode", void 0);
    return RealtimebiddingBiddersPublisherConnectionsBatchRejectResponse;
}(SpeakeasyBase));
export { RealtimebiddingBiddersPublisherConnectionsBatchRejectResponse };
