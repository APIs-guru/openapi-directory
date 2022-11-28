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
var PubsubSubscriptionsAcknowledgeQueryParams = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsAcknowledgeQueryParams, _super);
    function PubsubSubscriptionsAcknowledgeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsAcknowledgeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsAcknowledgeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsAcknowledgeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsAcknowledgeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsAcknowledgeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsAcknowledgeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsAcknowledgeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubSubscriptionsAcknowledgeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsAcknowledgeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsAcknowledgeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsAcknowledgeQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubSubscriptionsAcknowledgeQueryParams;
}(SpeakeasyBase));
export { PubsubSubscriptionsAcknowledgeQueryParams };
var PubsubSubscriptionsAcknowledgeSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsAcknowledgeSecurityOption1, _super);
    function PubsubSubscriptionsAcknowledgeSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubSubscriptionsAcknowledgeSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubSubscriptionsAcknowledgeSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubSubscriptionsAcknowledgeSecurityOption1;
}(SpeakeasyBase));
export { PubsubSubscriptionsAcknowledgeSecurityOption1 };
var PubsubSubscriptionsAcknowledgeSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsAcknowledgeSecurityOption2, _super);
    function PubsubSubscriptionsAcknowledgeSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubSubscriptionsAcknowledgeSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubSubscriptionsAcknowledgeSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubSubscriptionsAcknowledgeSecurityOption2;
}(SpeakeasyBase));
export { PubsubSubscriptionsAcknowledgeSecurityOption2 };
var PubsubSubscriptionsAcknowledgeSecurity = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsAcknowledgeSecurity, _super);
    function PubsubSubscriptionsAcknowledgeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubSubscriptionsAcknowledgeSecurityOption1)
    ], PubsubSubscriptionsAcknowledgeSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubSubscriptionsAcknowledgeSecurityOption2)
    ], PubsubSubscriptionsAcknowledgeSecurity.prototype, "option2", void 0);
    return PubsubSubscriptionsAcknowledgeSecurity;
}(SpeakeasyBase));
export { PubsubSubscriptionsAcknowledgeSecurity };
var PubsubSubscriptionsAcknowledgeRequest = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsAcknowledgeRequest, _super);
    function PubsubSubscriptionsAcknowledgeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubSubscriptionsAcknowledgeQueryParams)
    ], PubsubSubscriptionsAcknowledgeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AcknowledgeRequest)
    ], PubsubSubscriptionsAcknowledgeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubSubscriptionsAcknowledgeSecurity)
    ], PubsubSubscriptionsAcknowledgeRequest.prototype, "security", void 0);
    return PubsubSubscriptionsAcknowledgeRequest;
}(SpeakeasyBase));
export { PubsubSubscriptionsAcknowledgeRequest };
var PubsubSubscriptionsAcknowledgeResponse = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsAcknowledgeResponse, _super);
    function PubsubSubscriptionsAcknowledgeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubSubscriptionsAcknowledgeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PubsubSubscriptionsAcknowledgeResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubSubscriptionsAcknowledgeResponse.prototype, "statusCode", void 0);
    return PubsubSubscriptionsAcknowledgeResponse;
}(SpeakeasyBase));
export { PubsubSubscriptionsAcknowledgeResponse };
