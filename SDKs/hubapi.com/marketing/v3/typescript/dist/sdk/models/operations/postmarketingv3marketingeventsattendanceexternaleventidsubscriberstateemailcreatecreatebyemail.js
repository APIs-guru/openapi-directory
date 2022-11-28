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
var PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailPathParams = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailPathParams, _super);
    function PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=externalEventId" }),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailPathParams.prototype, "externalEventId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriberState" }),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailPathParams.prototype, "subscriberState", void 0);
    return PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailPathParams;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailPathParams };
var PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailQueryParams = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailQueryParams, _super);
    function PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=externalAccountId" }),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailQueryParams.prototype, "externalAccountId", void 0);
    return PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailQueryParams;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailQueryParams };
var PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailSecurity = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailSecurity, _super);
    function PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailSecurity.prototype, "hapikey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemePrivateAppsLegacy)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailSecurity.prototype, "privateAppsLegacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailSecurity.prototype, "oauth2Legacy", void 0);
    return PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailSecurity;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailSecurity };
var PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailRequest = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailRequest, _super);
    function PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailPathParams)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailQueryParams)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchInputMarketingEventEmailSubscriber)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailSecurity)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailRequest.prototype, "security", void 0);
    return PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailRequest;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailRequest };
var PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailResponse = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailResponse, _super);
    function PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchResponseSubscriberEmailResponse)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailResponse.prototype, "batchResponseSubscriberEmailResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailResponse.prototype, "statusCode", void 0);
    return PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailResponse;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailResponse };
