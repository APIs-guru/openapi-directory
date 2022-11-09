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
var PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption1, _super);
    function PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption1.prototype, "oauth2Legacy", void 0);
    return PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption1;
}(SpeakeasyBase));
export { PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption1 };
var PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption2, _super);
    function PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption2.prototype, "hapikey", void 0);
    return PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption2;
}(SpeakeasyBase));
export { PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption2 };
var PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption3 = /** @class */ (function (_super) {
    __extends(PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption3, _super);
    function PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption3.prototype, "oauth2Legacy", void 0);
    return PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption3;
}(SpeakeasyBase));
export { PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption3 };
var PostCommunicationPreferencesV3SubscribeSubscribeSecurity = /** @class */ (function (_super) {
    __extends(PostCommunicationPreferencesV3SubscribeSubscribeSecurity, _super);
    function PostCommunicationPreferencesV3SubscribeSubscribeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption1)
    ], PostCommunicationPreferencesV3SubscribeSubscribeSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption2)
    ], PostCommunicationPreferencesV3SubscribeSubscribeSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostCommunicationPreferencesV3SubscribeSubscribeSecurityOption3)
    ], PostCommunicationPreferencesV3SubscribeSubscribeSecurity.prototype, "option3", void 0);
    return PostCommunicationPreferencesV3SubscribeSubscribeSecurity;
}(SpeakeasyBase));
export { PostCommunicationPreferencesV3SubscribeSubscribeSecurity };
var PostCommunicationPreferencesV3SubscribeSubscribeRequest = /** @class */ (function (_super) {
    __extends(PostCommunicationPreferencesV3SubscribeSubscribeRequest, _super);
    function PostCommunicationPreferencesV3SubscribeSubscribeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PublicUpdateSubscriptionStatusRequest)
    ], PostCommunicationPreferencesV3SubscribeSubscribeRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostCommunicationPreferencesV3SubscribeSubscribeSecurity)
    ], PostCommunicationPreferencesV3SubscribeSubscribeRequest.prototype, "security", void 0);
    return PostCommunicationPreferencesV3SubscribeSubscribeRequest;
}(SpeakeasyBase));
export { PostCommunicationPreferencesV3SubscribeSubscribeRequest };
var PostCommunicationPreferencesV3SubscribeSubscribeResponse = /** @class */ (function (_super) {
    __extends(PostCommunicationPreferencesV3SubscribeSubscribeResponse, _super);
    function PostCommunicationPreferencesV3SubscribeSubscribeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostCommunicationPreferencesV3SubscribeSubscribeResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostCommunicationPreferencesV3SubscribeSubscribeResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PublicSubscriptionStatus)
    ], PostCommunicationPreferencesV3SubscribeSubscribeResponse.prototype, "publicSubscriptionStatus", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostCommunicationPreferencesV3SubscribeSubscribeResponse.prototype, "statusCode", void 0);
    return PostCommunicationPreferencesV3SubscribeSubscribeResponse;
}(SpeakeasyBase));
export { PostCommunicationPreferencesV3SubscribeSubscribeResponse };
