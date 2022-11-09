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
var PostMarketingV3MarketingEventsEventsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsCreateSecurityOption1, _super);
    function PostMarketingV3MarketingEventsEventsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], PostMarketingV3MarketingEventsEventsCreateSecurityOption1.prototype, "hapikey", void 0);
    return PostMarketingV3MarketingEventsEventsCreateSecurityOption1;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsCreateSecurityOption1 };
var PostMarketingV3MarketingEventsEventsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsCreateSecurityOption2, _super);
    function PostMarketingV3MarketingEventsEventsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], PostMarketingV3MarketingEventsEventsCreateSecurityOption2.prototype, "oauth2Legacy", void 0);
    return PostMarketingV3MarketingEventsEventsCreateSecurityOption2;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsCreateSecurityOption2 };
var PostMarketingV3MarketingEventsEventsCreateSecurity = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsCreateSecurity, _super);
    function PostMarketingV3MarketingEventsEventsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostMarketingV3MarketingEventsEventsCreateSecurityOption1)
    ], PostMarketingV3MarketingEventsEventsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostMarketingV3MarketingEventsEventsCreateSecurityOption2)
    ], PostMarketingV3MarketingEventsEventsCreateSecurity.prototype, "option2", void 0);
    return PostMarketingV3MarketingEventsEventsCreateSecurity;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsCreateSecurity };
var PostMarketingV3MarketingEventsEventsCreateRequest = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsCreateRequest, _super);
    function PostMarketingV3MarketingEventsEventsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.MarketingEventCreateRequestParams)
    ], PostMarketingV3MarketingEventsEventsCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostMarketingV3MarketingEventsEventsCreateSecurity)
    ], PostMarketingV3MarketingEventsEventsCreateRequest.prototype, "security", void 0);
    return PostMarketingV3MarketingEventsEventsCreateRequest;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsCreateRequest };
var PostMarketingV3MarketingEventsEventsCreateResponse = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsCreateResponse, _super);
    function PostMarketingV3MarketingEventsEventsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostMarketingV3MarketingEventsEventsCreateResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsEventsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.MarketingEventDefaultResponse)
    ], PostMarketingV3MarketingEventsEventsCreateResponse.prototype, "marketingEventDefaultResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostMarketingV3MarketingEventsEventsCreateResponse.prototype, "statusCode", void 0);
    return PostMarketingV3MarketingEventsEventsCreateResponse;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsCreateResponse };
