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
var PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreatePathParams = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreatePathParams, _super);
    function PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=externalEventId" }),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreatePathParams.prototype, "externalEventId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriberState" }),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreatePathParams.prototype, "subscriberState", void 0);
    return PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreatePathParams;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreatePathParams };
var PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateQueryParams = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateQueryParams, _super);
    function PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=externalAccountId" }),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateQueryParams.prototype, "externalAccountId", void 0);
    return PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateQueryParams;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateQueryParams };
var PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateSecurity = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateSecurity, _super);
    function PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateSecurity.prototype, "hapikey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemePrivateAppsLegacy)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateSecurity.prototype, "privateAppsLegacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateSecurity.prototype, "oauth2Legacy", void 0);
    return PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateSecurity;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateSecurity };
var PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest, _super);
    function PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreatePathParams)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateQueryParams)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchInputMarketingEventSubscriber)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateSecurity)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest.prototype, "security", void 0);
    return PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest };
var PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse, _super);
    function PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchResponseSubscriberVidResponse)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse.prototype, "batchResponseSubscriberVidResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse.prototype, "statusCode", void 0);
    return PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse };
