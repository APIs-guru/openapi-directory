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
var PubsubProjectsSubscriptionsModifyAckDeadlinePathParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsModifyAckDeadlinePathParams, _super);
    function PubsubProjectsSubscriptionsModifyAckDeadlinePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscription" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsModifyAckDeadlinePathParams.prototype, "subscription", void 0);
    return PubsubProjectsSubscriptionsModifyAckDeadlinePathParams;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsModifyAckDeadlinePathParams };
var PubsubProjectsSubscriptionsModifyAckDeadlineQueryParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsModifyAckDeadlineQueryParams, _super);
    function PubsubProjectsSubscriptionsModifyAckDeadlineQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsModifyAckDeadlineQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsModifyAckDeadlineQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsModifyAckDeadlineQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsModifyAckDeadlineQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsModifyAckDeadlineQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsModifyAckDeadlineQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsModifyAckDeadlineQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubProjectsSubscriptionsModifyAckDeadlineQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsModifyAckDeadlineQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsModifyAckDeadlineQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsModifyAckDeadlineQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubProjectsSubscriptionsModifyAckDeadlineQueryParams;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsModifyAckDeadlineQueryParams };
var PubsubProjectsSubscriptionsModifyAckDeadlineSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsModifyAckDeadlineSecurityOption1, _super);
    function PubsubProjectsSubscriptionsModifyAckDeadlineSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSubscriptionsModifyAckDeadlineSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSubscriptionsModifyAckDeadlineSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubProjectsSubscriptionsModifyAckDeadlineSecurityOption1;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsModifyAckDeadlineSecurityOption1 };
var PubsubProjectsSubscriptionsModifyAckDeadlineSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsModifyAckDeadlineSecurityOption2, _super);
    function PubsubProjectsSubscriptionsModifyAckDeadlineSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSubscriptionsModifyAckDeadlineSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSubscriptionsModifyAckDeadlineSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubProjectsSubscriptionsModifyAckDeadlineSecurityOption2;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsModifyAckDeadlineSecurityOption2 };
var PubsubProjectsSubscriptionsModifyAckDeadlineSecurity = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsModifyAckDeadlineSecurity, _super);
    function PubsubProjectsSubscriptionsModifyAckDeadlineSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSubscriptionsModifyAckDeadlineSecurityOption1)
    ], PubsubProjectsSubscriptionsModifyAckDeadlineSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSubscriptionsModifyAckDeadlineSecurityOption2)
    ], PubsubProjectsSubscriptionsModifyAckDeadlineSecurity.prototype, "option2", void 0);
    return PubsubProjectsSubscriptionsModifyAckDeadlineSecurity;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsModifyAckDeadlineSecurity };
var PubsubProjectsSubscriptionsModifyAckDeadlineRequest = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsModifyAckDeadlineRequest, _super);
    function PubsubProjectsSubscriptionsModifyAckDeadlineRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSubscriptionsModifyAckDeadlinePathParams)
    ], PubsubProjectsSubscriptionsModifyAckDeadlineRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSubscriptionsModifyAckDeadlineQueryParams)
    ], PubsubProjectsSubscriptionsModifyAckDeadlineRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ModifyAckDeadlineRequest)
    ], PubsubProjectsSubscriptionsModifyAckDeadlineRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSubscriptionsModifyAckDeadlineSecurity)
    ], PubsubProjectsSubscriptionsModifyAckDeadlineRequest.prototype, "security", void 0);
    return PubsubProjectsSubscriptionsModifyAckDeadlineRequest;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsModifyAckDeadlineRequest };
var PubsubProjectsSubscriptionsModifyAckDeadlineResponse = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsModifyAckDeadlineResponse, _super);
    function PubsubProjectsSubscriptionsModifyAckDeadlineResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsModifyAckDeadlineResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PubsubProjectsSubscriptionsModifyAckDeadlineResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubProjectsSubscriptionsModifyAckDeadlineResponse.prototype, "statusCode", void 0);
    return PubsubProjectsSubscriptionsModifyAckDeadlineResponse;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsModifyAckDeadlineResponse };
