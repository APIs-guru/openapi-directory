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
var PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdPathParams = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdPathParams, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=externalEventId" }),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdPathParams.prototype, "externalEventId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriberState" }),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdPathParams.prototype, "subscriberState", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdPathParams;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdPathParams };
var PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdQueryParams = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdQueryParams, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=externalAccountId" }),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdQueryParams.prototype, "externalAccountId", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdQueryParams;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdQueryParams };
var PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdSecurity = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdSecurity, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdSecurity.prototype, "hapikey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemePrivateAppsLegacy)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdSecurity.prototype, "privateAppsLegacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdSecurity.prototype, "oauth2Legacy", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdSecurity;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdSecurity };
var PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdRequest = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdRequest, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdPathParams)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdQueryParams)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchInputMarketingEventSubscriber)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdSecurity)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdRequest.prototype, "security", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdRequest;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdRequest };
var PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdResponse = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdResponse, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdResponse.prototype, "statusCode", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdResponse;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdResponse };
