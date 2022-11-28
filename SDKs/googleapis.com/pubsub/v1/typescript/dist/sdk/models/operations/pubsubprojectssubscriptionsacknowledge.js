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
var PubsubProjectsSubscriptionsAcknowledgePathParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsAcknowledgePathParams, _super);
    function PubsubProjectsSubscriptionsAcknowledgePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscription" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsAcknowledgePathParams.prototype, "subscription", void 0);
    return PubsubProjectsSubscriptionsAcknowledgePathParams;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsAcknowledgePathParams };
var PubsubProjectsSubscriptionsAcknowledgeQueryParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsAcknowledgeQueryParams, _super);
    function PubsubProjectsSubscriptionsAcknowledgeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsAcknowledgeQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsAcknowledgeQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsAcknowledgeQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsAcknowledgeQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsAcknowledgeQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsAcknowledgeQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsAcknowledgeQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubProjectsSubscriptionsAcknowledgeQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsAcknowledgeQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsAcknowledgeQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsAcknowledgeQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubProjectsSubscriptionsAcknowledgeQueryParams;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsAcknowledgeQueryParams };
var PubsubProjectsSubscriptionsAcknowledgeSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsAcknowledgeSecurityOption1, _super);
    function PubsubProjectsSubscriptionsAcknowledgeSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSubscriptionsAcknowledgeSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSubscriptionsAcknowledgeSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubProjectsSubscriptionsAcknowledgeSecurityOption1;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsAcknowledgeSecurityOption1 };
var PubsubProjectsSubscriptionsAcknowledgeSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsAcknowledgeSecurityOption2, _super);
    function PubsubProjectsSubscriptionsAcknowledgeSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSubscriptionsAcknowledgeSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSubscriptionsAcknowledgeSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubProjectsSubscriptionsAcknowledgeSecurityOption2;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsAcknowledgeSecurityOption2 };
var PubsubProjectsSubscriptionsAcknowledgeSecurity = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsAcknowledgeSecurity, _super);
    function PubsubProjectsSubscriptionsAcknowledgeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSubscriptionsAcknowledgeSecurityOption1)
    ], PubsubProjectsSubscriptionsAcknowledgeSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSubscriptionsAcknowledgeSecurityOption2)
    ], PubsubProjectsSubscriptionsAcknowledgeSecurity.prototype, "option2", void 0);
    return PubsubProjectsSubscriptionsAcknowledgeSecurity;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsAcknowledgeSecurity };
var PubsubProjectsSubscriptionsAcknowledgeRequest = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsAcknowledgeRequest, _super);
    function PubsubProjectsSubscriptionsAcknowledgeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSubscriptionsAcknowledgePathParams)
    ], PubsubProjectsSubscriptionsAcknowledgeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSubscriptionsAcknowledgeQueryParams)
    ], PubsubProjectsSubscriptionsAcknowledgeRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.AcknowledgeRequest)
    ], PubsubProjectsSubscriptionsAcknowledgeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSubscriptionsAcknowledgeSecurity)
    ], PubsubProjectsSubscriptionsAcknowledgeRequest.prototype, "security", void 0);
    return PubsubProjectsSubscriptionsAcknowledgeRequest;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsAcknowledgeRequest };
var PubsubProjectsSubscriptionsAcknowledgeResponse = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsAcknowledgeResponse, _super);
    function PubsubProjectsSubscriptionsAcknowledgeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsAcknowledgeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PubsubProjectsSubscriptionsAcknowledgeResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubProjectsSubscriptionsAcknowledgeResponse.prototype, "statusCode", void 0);
    return PubsubProjectsSubscriptionsAcknowledgeResponse;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsAcknowledgeResponse };
