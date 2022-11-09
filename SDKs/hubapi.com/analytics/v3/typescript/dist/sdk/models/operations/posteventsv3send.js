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
var PostEventsV3SendSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostEventsV3SendSecurityOption1, _super);
    function PostEventsV3SendSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], PostEventsV3SendSecurityOption1.prototype, "hapikey", void 0);
    return PostEventsV3SendSecurityOption1;
}(SpeakeasyBase));
export { PostEventsV3SendSecurityOption1 };
var PostEventsV3SendSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostEventsV3SendSecurityOption2, _super);
    function PostEventsV3SendSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], PostEventsV3SendSecurityOption2.prototype, "oauth2Legacy", void 0);
    return PostEventsV3SendSecurityOption2;
}(SpeakeasyBase));
export { PostEventsV3SendSecurityOption2 };
var PostEventsV3SendSecurity = /** @class */ (function (_super) {
    __extends(PostEventsV3SendSecurity, _super);
    function PostEventsV3SendSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostEventsV3SendSecurityOption1)
    ], PostEventsV3SendSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostEventsV3SendSecurityOption2)
    ], PostEventsV3SendSecurity.prototype, "option2", void 0);
    return PostEventsV3SendSecurity;
}(SpeakeasyBase));
export { PostEventsV3SendSecurity };
var PostEventsV3SendRequest = /** @class */ (function (_super) {
    __extends(PostEventsV3SendRequest, _super);
    function PostEventsV3SendRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BehavioralEventHttpCompletionRequest)
    ], PostEventsV3SendRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostEventsV3SendSecurity)
    ], PostEventsV3SendRequest.prototype, "security", void 0);
    return PostEventsV3SendRequest;
}(SpeakeasyBase));
export { PostEventsV3SendRequest };
var PostEventsV3SendResponse = /** @class */ (function (_super) {
    __extends(PostEventsV3SendResponse, _super);
    function PostEventsV3SendResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostEventsV3SendResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostEventsV3SendResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostEventsV3SendResponse.prototype, "statusCode", void 0);
    return PostEventsV3SendResponse;
}(SpeakeasyBase));
export { PostEventsV3SendResponse };
