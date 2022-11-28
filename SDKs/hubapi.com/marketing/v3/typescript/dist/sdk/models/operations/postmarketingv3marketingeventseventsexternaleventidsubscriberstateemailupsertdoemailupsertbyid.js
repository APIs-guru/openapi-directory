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
var PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdPathParams = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdPathParams, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=externalEventId" }),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdPathParams.prototype, "externalEventId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriberState" }),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdPathParams.prototype, "subscriberState", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdPathParams;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdPathParams };
var PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdQueryParams = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdQueryParams, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=externalAccountId" }),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdQueryParams.prototype, "externalAccountId", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdQueryParams;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdQueryParams };
var PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdSecurity = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdSecurity, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdSecurity.prototype, "hapikey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemePrivateAppsLegacy)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdSecurity.prototype, "privateAppsLegacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdSecurity.prototype, "oauth2Legacy", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdSecurity;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdSecurity };
var PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdRequest = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdRequest, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdPathParams)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdQueryParams)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchInputMarketingEventEmailSubscriber)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdSecurity)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdRequest.prototype, "security", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdRequest;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdRequest };
var PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdResponse = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdResponse, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdResponse.prototype, "statusCode", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdResponse;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdResponse };
