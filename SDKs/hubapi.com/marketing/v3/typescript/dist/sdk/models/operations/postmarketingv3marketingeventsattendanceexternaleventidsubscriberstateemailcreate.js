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
var PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreatePathParams = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreatePathParams, _super);
    function PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=externalEventId" }),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreatePathParams.prototype, "externalEventId", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=subscriberState" }),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreatePathParams.prototype, "subscriberState", void 0);
    return PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreatePathParams;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreatePathParams };
var PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateQueryParams = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateQueryParams, _super);
    function PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=externalAccountId" }),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateQueryParams.prototype, "externalAccountId", void 0);
    return PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateQueryParams;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateQueryParams };
var PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurityOption1, _super);
    function PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurityOption1.prototype, "hapikey", void 0);
    return PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurityOption1;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurityOption1 };
var PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurityOption2, _super);
    function PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurityOption2.prototype, "oauth2Legacy", void 0);
    return PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurityOption2;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurityOption2 };
var PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurity = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurity, _super);
    function PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurityOption1)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurityOption2)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurity.prototype, "option2", void 0);
    return PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurity;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurity };
var PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateRequest = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateRequest, _super);
    function PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreatePathParams)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateQueryParams)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchInputMarketingEventEmailSubscriber)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurity)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateRequest.prototype, "security", void 0);
    return PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateRequest;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateRequest };
var PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateResponse = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateResponse, _super);
    function PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", shared.BatchResponseSubscriberEmailResponse)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateResponse.prototype, "batchResponseSubscriberEmailResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateResponse.prototype, "statusCode", void 0);
    return PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateResponse;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateResponse };
