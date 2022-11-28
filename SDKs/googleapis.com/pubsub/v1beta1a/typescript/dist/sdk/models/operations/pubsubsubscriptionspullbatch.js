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
var PubsubSubscriptionsPullBatchQueryParams = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsPullBatchQueryParams, _super);
    function PubsubSubscriptionsPullBatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsPullBatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsPullBatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsPullBatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsPullBatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsPullBatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsPullBatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsPullBatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubSubscriptionsPullBatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsPullBatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsPullBatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsPullBatchQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubSubscriptionsPullBatchQueryParams;
}(SpeakeasyBase));
export { PubsubSubscriptionsPullBatchQueryParams };
var PubsubSubscriptionsPullBatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsPullBatchSecurityOption1, _super);
    function PubsubSubscriptionsPullBatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubSubscriptionsPullBatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubSubscriptionsPullBatchSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubSubscriptionsPullBatchSecurityOption1;
}(SpeakeasyBase));
export { PubsubSubscriptionsPullBatchSecurityOption1 };
var PubsubSubscriptionsPullBatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsPullBatchSecurityOption2, _super);
    function PubsubSubscriptionsPullBatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubSubscriptionsPullBatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubSubscriptionsPullBatchSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubSubscriptionsPullBatchSecurityOption2;
}(SpeakeasyBase));
export { PubsubSubscriptionsPullBatchSecurityOption2 };
var PubsubSubscriptionsPullBatchSecurity = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsPullBatchSecurity, _super);
    function PubsubSubscriptionsPullBatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubSubscriptionsPullBatchSecurityOption1)
    ], PubsubSubscriptionsPullBatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubSubscriptionsPullBatchSecurityOption2)
    ], PubsubSubscriptionsPullBatchSecurity.prototype, "option2", void 0);
    return PubsubSubscriptionsPullBatchSecurity;
}(SpeakeasyBase));
export { PubsubSubscriptionsPullBatchSecurity };
var PubsubSubscriptionsPullBatchRequest = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsPullBatchRequest, _super);
    function PubsubSubscriptionsPullBatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubSubscriptionsPullBatchQueryParams)
    ], PubsubSubscriptionsPullBatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PullBatchRequest)
    ], PubsubSubscriptionsPullBatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubSubscriptionsPullBatchSecurity)
    ], PubsubSubscriptionsPullBatchRequest.prototype, "security", void 0);
    return PubsubSubscriptionsPullBatchRequest;
}(SpeakeasyBase));
export { PubsubSubscriptionsPullBatchRequest };
var PubsubSubscriptionsPullBatchResponse = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsPullBatchResponse, _super);
    function PubsubSubscriptionsPullBatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubSubscriptionsPullBatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PullBatchResponse)
    ], PubsubSubscriptionsPullBatchResponse.prototype, "pullBatchResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubSubscriptionsPullBatchResponse.prototype, "statusCode", void 0);
    return PubsubSubscriptionsPullBatchResponse;
}(SpeakeasyBase));
export { PubsubSubscriptionsPullBatchResponse };
