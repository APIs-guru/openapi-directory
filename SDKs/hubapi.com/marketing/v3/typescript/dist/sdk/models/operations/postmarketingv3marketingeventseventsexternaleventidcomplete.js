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
var PostMarketingV3MarketingEventsEventsExternalEventIdCompletePathParams = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdCompletePathParams, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdCompletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=externalEventId" }),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCompletePathParams.prototype, "externalEventId", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdCompletePathParams;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsExternalEventIdCompletePathParams };
var PostMarketingV3MarketingEventsEventsExternalEventIdCompleteQueryParams = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdCompleteQueryParams, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdCompleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=externalAccountId" }),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCompleteQueryParams.prototype, "externalAccountId", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdCompleteQueryParams;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsExternalEventIdCompleteQueryParams };
var PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurityOption1, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurityOption1.prototype, "hapikey", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurityOption1;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurityOption1 };
var PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurityOption2, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurityOption2.prototype, "oauth2Legacy", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurityOption2;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurityOption2 };
var PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurity = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurity, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurityOption1)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurityOption2)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurity.prototype, "option2", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurity;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurity };
var PostMarketingV3MarketingEventsEventsExternalEventIdCompleteRequest = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdCompleteRequest, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdCompleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostMarketingV3MarketingEventsEventsExternalEventIdCompletePathParams)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCompleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostMarketingV3MarketingEventsEventsExternalEventIdCompleteQueryParams)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCompleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.MarketingEventCompleteRequestParams)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCompleteRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurity)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCompleteRequest.prototype, "security", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdCompleteRequest;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsExternalEventIdCompleteRequest };
var PostMarketingV3MarketingEventsEventsExternalEventIdCompleteResponse = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdCompleteResponse, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdCompleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCompleteResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCompleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.MarketingEventDefaultResponse)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCompleteResponse.prototype, "marketingEventDefaultResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCompleteResponse.prototype, "statusCode", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdCompleteResponse;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsExternalEventIdCompleteResponse };
